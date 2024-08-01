import React, { useRef, useState, useCallback } from 'react';
import { shuffle } from 'd3';
import { ThemeProvider, createTheme } from '@mui/material';
import D3Chart from './Components/D3Chart';
import Navbar from './Components/Navbar/Navbar';
import IterationCount from './Components/IterationCount/IterationCount';
import ChartButtons from './Components/ChartButtons';

function App() {
  const [sort, setSort] = useState('Merge');
  const [sortStatus, setSortStatus] = useState(false);
  const [data, setData] = useState(shuffle([...Array(10).keys()]));
  const [dataSize, setDataSize] = useState(10);
  const [iterations, setIterations] = useState(0);
  const [speed, setSpeed] = useState(5.2);

  const svgRef = useRef();
  const speedRef = useRef(speed);
  const sortStatusRef = useRef(false);

  const updateSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
    speedRef.current = newSpeed;
  }, []);

  const getSpeed = useCallback(() => speed, [speed]);

  const navbarProps = {
    getSpeed, updateSpeed, setData, dataSize, setDataSize, sort, setSort, sortStatus,
  };

  const chartButtonProps = {
    data, setData, svgRef, sort, sortStatus, setSortStatus, setIterations, speedRef, sortStatusRef,
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#76ff03',
      },
    },

  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar {...navbarProps} />
      <div className="container">
        <div id="chart">
          <D3Chart svgRef={svgRef} data={data} />
          <ChartButtons {...chartButtonProps} />
          <IterationCount iterations={iterations} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
