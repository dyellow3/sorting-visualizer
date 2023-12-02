import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { SelectionSort } from './SelectionSort';
import { MergeSort } from './MergeSort';
import { Slider, Button, ButtonGroup } from '@mui/material';
import { shuffle } from 'd3';
const D3Chart = () => {
  const [data, setData] = useState(shuffle([...Array(10).keys()]))
  const [dataSize, setDataSize] = useState(10);
  const [sortStatus, setSortStatus] = useState(false);
  const [iterations, setIterations] = useState(0);
  const [speed, setSpeed] = useState(0.1)
  const [sort, setSort] = useState('Selection')
  const margin = { top: 10, right: 10, bottom: 10, left: 10 };
  const width = 460 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  const barWidth = width / data.length;
  const barHeight = height / data.length;

  // ------------ HANDLE FUNCTIONS ----------------
  const handleSort = async () => {
    // !! Update !!
    if (!sortStatus) {
      setIterations(0)
      setSortStatus(true);
      if (sort === 'Selection') {
        await SelectionSort(data, swapRectangles, colorRectangle, updateIterations)
      }
      else if (sort === 'Merge') {
        await MergeSort(data, 0, data.length - 1, swapRectangles, colorRectangle, updateIterations)
      }
      setSortStatus(false);
    }
  }
  const handleSpeedChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setSpeed(newValue)
    }
  }
  const handleRandomize = () => {
    setData(shuffle(data))
    loadChart(data)
  }
  const handleDataSizeChange = (event, newValue) => {
    setDataSize(newValue);
    setData(shuffle([...Array(dataSize).keys()]))
  }
  const updateIterations = () => {
    setIterations((prevIterations) => prevIterations + 1);
  };
  // ------------ END OF HANDLE FUNCTIONS ------------


  const colorRectangle = (index, color) => {
    return new Promise(async resolve => {
      d3.select('rect[index="' + index + '"]')
        .attr('fill', `${color}`)
      setTimeout(() => {
        resolve()
      }, speed * 50)
    })
  }

  // Main function, swaps rectangles both visually and in the data array
  const swapRectangles = (index1, index2) => {
    return new Promise(async resolve => {
      // Swap values in the data array
      const temp = data[index1]
      data[index1] = data[index2]
      data[index2] = temp

      // Swap rectangles visually
      // This code handles this swap visualization 
      // Need to get the real index of the rectangle in the chart, not data array
      const realIndex1 = parseInt(d3.select('rect[index="' + index1 + '"]').attr("index"));
      const realIndex2 = parseInt(d3.select('rect[index="' + index2 + '"]').attr("index"));

      d3.select('rect[index="' + index1 + '"]')
        .transition()
        .duration(speed * 100 + 50)
        .attr("y", d => height - barHeight * (d + 1))
        .attr("height", d => barHeight * (d + 1))
        .attr("transform", () => {
          const translate = [barWidth * realIndex2, 0];
          return "translate(" + translate + ")";
        })
        .attr("index", String(realIndex2));

      d3.select('rect[index="' + index2 + '"]')
        .transition()
        .duration(speed * 100 + 50)
        .attr("y", d => height - barHeight * (d + 1))
        .attr("height", d => barHeight * (d + 1))
        .attr("transform", () => {
          const translate = [barWidth * realIndex1, 0];
          return "translate(" + translate + ")";
        })
        .attr("index", String(realIndex1));

      // Add a delay after swapping
      setTimeout(() => {
        resolve()
      }, speed * 100 + 75) // duration takes speed*100 + 50, make sure enough time
    })
  }

  // Loads chart visualization based on data given
  const loadChart = (data) => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('rect').remove();
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('index', (d, i) => i)
      .attr('y', d => height - barHeight * (d + 1))
      .attr('height', d => barHeight * (d + 1))
      .attr('width', barWidth)
      //.attr("style", "outline: thin solid red;")
      .attr('transform', (d, i) => `translate(${barWidth * i}, 0)`);
  }

  // Initial setup/load of the chart
  const svgRef = useRef();
  useEffect(() => {
    loadChart(data);
  }, [data, barWidth, barHeight, height]);

  // TODO: make more components, D3Chart should only really return the graph
  // Could have a seperate component for the ButtonGroup, and Sliders. But how to share state?
  return (
    <main>
      <div id="container">
        <div id="iterationCount">
          <h1>{iterations}</h1>
        </div>
        <div id="arrayContainer">
          <svg ref={svgRef} width={width} height={height + margin.top + margin.bottom} />
          <div id="buttonContainer">
            <button onClick={handleRandomize} disabled={sortStatus}>Randomize</button>
            <button onClick={handleSort} disabled={sortStatus}>Sort</button>
          </div>

        </div>

        <div id="sortCode">
          <h1>0</h1>
        </div>
      </div>

      <div id="sliders">
        <Slider
          disabled={sortStatus}
          value={dataSize}
          valueLabelDisplay="auto"
          step={1}
          min={5}
          max={50}
          onChange={handleDataSizeChange}
        />

        <Slider
          disabled={sortStatus}
          value={speed}
          aria-label="Temperature"
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={11}
          onChange={handleSpeedChange}
        />
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button disabled={sortStatus} onClick={() => setSort('Merge')} variant={sort === 'Merge' ? 'contained' : 'outlined'}>Merge</Button>
          <Button disabled={sortStatus} onClick={() => setSort('Selection')} variant={sort === 'Selection' ? 'contained' : 'outlined'}>Selection</Button>
        </ButtonGroup>
      </div>
    </main>
  );

};

export default D3Chart;