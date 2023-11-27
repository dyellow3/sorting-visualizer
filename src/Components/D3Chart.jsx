import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { InsertionSort } from './InsertionSort';

const D3Chart = ({ data }) => {
  const margin = { top: 10, right: 10, bottom: 10, left: 10 };
  const width = 460 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  const barWidth = width / data.length;
  const barHeight = height / data.length;
  let speed = 1;

  
  const updateChart = (index1, index2) => {
    const realIndex1 = parseInt(d3.select('rect[index="' + index1 + '"]').attr("index"));
    const realIndex2 = parseInt(d3.select('rect[index="' + index2 + '"]').attr("index"));

    d3.select('rect[index="' + index1 + '"]')
      .transition()
      .duration(speed * 200)
      .attr("y", d => height - barHeight * (d + 1))
      .attr("height", d => barHeight * (d + 1))
      .attr("transform", () => {
        const translate = [barWidth * realIndex2, 0];
        return "translate(" + translate + ")";
      })
      .attr("index", String(realIndex2));

    d3.select('rect[index="' + index2 + '"]')
      .transition()
      .duration(speed * 200)
      .attr("y", d => height - barHeight * (d + 1))
      .attr("height", d => barHeight * (d + 1))
      .attr("transform", () => {
        const translate = [barWidth * realIndex1, 0];
        return "translate(" + translate + ")";
      })
      .attr("index", String(realIndex1));
  };

  function swapRectangles(index1, index2) {
    return new Promise(resolve => {
      // Swap the data
      const temp = data[index1];
      data[index1] = data[index2];
      data[index2] = temp;

      // Change color of the two swapped rects
      d3.select('rect[index="' + index1 + '"]')
        .attr('fill', 'red')

      d3.select('rect[index="' + index2 + '"]')
        .attr('fill', 'red')

      // Update the chart with the new data
      updateChart(index1, index2);
      console.log(data);

      setTimeout(() => {
        d3.select('rect[index="' + index1 + '"]')
          .attr('fill', 'black')

        d3.select('rect[index="' + index2 + '"]')
          .attr('fill', 'black')
        resolve();

      }, speed * 200 + 100) // ensures enough time for updateChart to run
    })

  }

  const handleSort = async () => {
    // need a way to feed in the data
    await InsertionSort(data, swapRectangles)
  }



  const svgRef = useRef();
  // Loading initial chart 
  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('index', (d, i) => i)
      .attr('y', d => height - barHeight * (d + 1))
      .attr('height', d => barHeight * (d + 1))
      .attr('width', barWidth)
      .attr('transform', (d, i) => `translate(${barWidth * i}, 0)`);
  }, [data, barWidth, barHeight, height]);


  return (
    <div id="arrayContainer">
      <svg ref={svgRef} width={width + margin.left + margin.right} height={height + margin.top + margin.bottom} />
      <button onClick={handleSort}>Sort</button>
    </div>
  );
};

export default D3Chart;