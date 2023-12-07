import React, { useEffect } from 'react';
import { LoadChart } from '../Utils/LoadChart';

const D3Chart = ({ svgRef, data }) => {
  const margin = { top: 10, right: 10, bottom: 10, left: 10 };
  const width = 460;
  const height = 410;
  const barWidth = (width - 50) / data.length;
  const barHeight = (height - 10) / data.length;

 



  // Initial setup/load of the chart
  useEffect(() => {
    LoadChart(data, svgRef);
  }, [data, barWidth, barHeight, height]);


  // removed, need to replace
  /*
    <div id="iterationCount">
          <h1>{iterations}</h1>
        </div>
const updateIterations = () => {
    setIterations((prevIterations) => prevIterations + 1);
  };

        <div id="sortCode">
          <SortingCode sort={sort} />
        </div>
  */
 
  return (
      <div id="chart">
        <svg ref={svgRef} width={width} height={height + margin.top + margin.bottom} />
      </div>
  );

};

export default D3Chart;