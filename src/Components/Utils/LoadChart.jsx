import * as d3 from 'd3';


export const LoadChart = (data, svgRef) => {
    var width = 460;
    var height = 410;
    var barWidth = (width - 50) / data.length;
    var barHeight = (height - 10) / data.length;
    const svg = d3.select(svgRef.current);
    svg.selectAll('rect').remove();
    svg
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('fill', '#2196f3')
      .attr('stroke', 'black')
      .attr('stroke-width', '1px')
      .attr('index', (d, i) => i)
      .attr('y', d => height - barHeight * (d + 1))
      .attr('height', d => barHeight * (d + 1))
      .attr('width', barWidth)
      .attr('transform', (d, i) => `translate(${(barWidth + 50 / (data.length + 1)) * i + 50 / data.length}, 5)`);
}
