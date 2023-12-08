import * as d3 from 'd3';
import { CHART_HEIGHT, CHART_WIDTH, PRIMARY_COLOR } from '../config';

export const LoadChart = (data, svgRef) => {
    var barWidth = (CHART_WIDTH - 50) / data.length;
    var barHeight = (CHART_HEIGHT - 10) / data.length;
    const svg = d3.select(svgRef.current);
    svg.selectAll('rect').remove();
    svg
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('fill', `${PRIMARY_COLOR}`)
      .attr('stroke', 'black')
      .attr('stroke-width', '1px')
      .attr('index', (d, i) => i)
      .attr('y', d => CHART_HEIGHT - barHeight * (d + 1))
      .attr('height', d => barHeight * (d + 1))
      .attr('width', barWidth)
      .attr('transform', (d, i) => `translate(${(barWidth + 50 / (data.length + 1)) * i + 50 / data.length}, 5)`);
}
