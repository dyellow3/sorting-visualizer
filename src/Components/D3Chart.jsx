import React, { useEffect } from 'react';
import { LoadChart } from '../Utils/LoadChart';
import { CHART_HEIGHT, CHART_WIDTH } from './config';

const D3Chart = ({ svgRef, data }) => {

  // Initial setup/load of the chart
  useEffect(() => {
    LoadChart(data, svgRef);
  }, [data, svgRef]);

  // Add 20 to height for margin
  return (
      <svg ref={svgRef} width={CHART_WIDTH} height={CHART_HEIGHT + 20} />
      
  );

};

export default D3Chart;