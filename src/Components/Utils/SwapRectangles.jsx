import * as d3 from 'd3';
import { CHART_HEIGHT, CHART_WIDTH } from '../config';
export const SwapRectangles = (index1, index2, data, speed) => {
    return new Promise(async resolve => {
        // Swap values in the data array
        const barWidth = (CHART_WIDTH - 50) / data.length;
        const barHeight = (CHART_HEIGHT - 10) / data.length;
        const temp = data[index1]
        data[index1] = data[index2]
        data[index2] = temp

        // Swap rectangles visually
        // This code handles this swap visualization 
        // Need to get the real index of the rectangle in the chart, not data array
        const realIndex1 = parseInt(d3.select('rect[index="' + index1 + '"]').attr("index"));
        const realIndex2 = parseInt(d3.select('rect[index="' + index2 + '"]').attr("index"));

        //var rect1 = d3.select('rect[index="' + index1 + '"]')
        d3.select('rect[index="' + index1 + '"]')
            .transition()
            .duration(speed * 100 + 50)
            .attr("y", d => CHART_HEIGHT - barHeight * (d + 1))
            .attr("height", d => barHeight * (d + 1))
            .attr("transform", () => {
                const translate = [(barWidth + 50 / (data.length + 1)) * realIndex2 + 50 / data.length, 5];
                return "translate(" + translate + ")";
            })
            .attr("index", String(realIndex2));

        d3.select('rect[index="' + index2 + '"]')
            .transition()
            .duration(speed * 100 + 50)
            .attr("y", d => CHART_HEIGHT - barHeight * (d + 1))
            .attr("height", d => barHeight * (d + 1))
            .attr("transform", () => {
                const translate = [(barWidth + 50 / (data.length + 1)) * realIndex1 + 50 / data.length, 5];
                return "translate(" + translate + ")";
            })
            .attr("index", String(realIndex1));

        // Add a delay after swapping
        setTimeout(() => {
            resolve()
        }, speed * 100 + 75) // +75 TO make sure enough time
    })
}