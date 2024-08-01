import D3Chart from './Components/D3Chart'
import Navbar from './Components/Navbar/Navbar';
import IterationCount from './Components/IterationCount/IterationCount';
import ChartButtons from './Components/ChartButtons';
import React, { useRef, useState, useCallback } from 'react';
import { shuffle } from 'd3';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const svgRef = useRef();

  const [sort, setSort] = useState('Merge')
  const [sortStatus, setSortStatus] = useState(false)

  const [data, setData] = useState(shuffle([...Array(10).keys()]))
  const [dataSize, setDataSize] = useState(10)

  const [iterations, setIterations] = useState(0)
  const [speed, setSpeed] = useState(0.1)

  const speedRef = useRef(speed)
  
  const updateSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
    speedRef.current = newSpeed
  }, []);

  const getSpeed = useCallback(() => speed, [speed])

  const navbarProps = {
    speed, dataSize, setDataSize, sort, setSort, sortStatus, updateSpeed, getSpeed
  }

  const chartButtonProps = {
    data, setData, svgRef, sort, sortStatus, setSortStatus, setIterations, speedRef
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
        </div>
      </ThemeProvider>
    </>
  )
}

export default App