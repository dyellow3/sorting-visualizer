
import D3Chart from './Components/D3Chart'
import Navbar from './Components/Navbar/Navbar';
import IterationCount from './Components/IterationCount/IterationCount';
import ChartButtons from './Components/ChartButtons';
import { SortingCode } from './Components/SortingCode/SortingCode';
import React, { useRef, useState } from 'react';
import { shuffle } from 'd3';
import { ThemeProvider, createTheme } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
function App() {
  const svgRef = useRef();

  const [sort, setSort] = useState('Merge')
  const [sortStatus, setSortStatus] = useState(false)

  const [data, setData] = useState(shuffle([...Array(10).keys()]))
  const [dataSize, setDataSize] = useState(10)

  const [iterations, setIterations] = useState(0)
  const [speed, setSpeed] = useState(0.1)

  const navbarProps = {
    speed, setSpeed, setData, dataSize, setDataSize, sort, setSort, sortStatus
  }

  const chartButtonProps = {
    data, setData, svgRef, sort, sortStatus, setSortStatus, setIterations, speed
  }

  const theme = createTheme({
    palette: {
        primary: {
            main: '#76ff03',
        },
    },

  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar {...navbarProps} />
        <div className="container">
          <div id="chart">
            <D3Chart svgRef={svgRef} data={data} />
            <ChartButtons {...chartButtonProps}></ChartButtons>
            <IterationCount iterations={iterations} />
          </div>
          {/*<SortingCode sort={sort} />*/}
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
