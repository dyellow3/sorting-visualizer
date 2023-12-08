import React, { useEffect } from 'react';
import { LoadChart } from './Utils/LoadChart';

import { CHART_HEIGHT, CHART_WIDTH } from './config';

const D3Chart = ({ svgRef, data }) => {
  const margin = { top: 10, right: 10, bottom: 10, left: 10 };
  
  const barWidth = (CHART_WIDTH - 50) / data.length;
  const barHeight = (CHART_HEIGHT - 10) / data.length;

 



  // Initial setup/load of the chart
  useEffect(() => {
    LoadChart(data, svgRef);
  }, [data, barWidth, barHeight,  CHART_HEIGHT]);


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
        <svg ref={svgRef} width={CHART_WIDTH} height={CHART_HEIGHT + margin.top + margin.bottom} />
      </div>
  );

};

export default D3Chart;