import * as d3 from 'd3';
import { CHART_WIDTH, CHART_HEIGHT } from '../Components/config';
/*
export const SwapRectangles = (index1, index2, data, speed) => {
    return new Promise((resolve) => {
        const barWidth = (CHART_WIDTH - 50) / data.length;
        const barHeight = (CHART_HEIGHT - 10) / data.length;

        const temp = data[index1]
        data[index1] = data[index2]
        data[index2] = temp
        
        const rect1 = d3.select('rect[index="' + index1 + '"]');
        const rect2 = d3.select('rect[index="' + index2 + '"]');

        // Get the y and height values for the rectangles
        const y1 = parseFloat(rect1.attr('y'));
        const height1 = parseFloat(rect1.attr('height'));
        const y2 = parseFloat(rect2.attr('y'));
        const height2 = parseFloat(rect2.attr('height'));

        // Swap rectangles visually
        // make rect1 have rect2s index, and rect2 have rect1s
        // make rect1 move to rect2s pos, rect2 to rect1s pos
        rect1
            .transition()
            .duration(speed * 100 + 50)
            .attr('y', y2)
            .attr('height', height2);

        rect2
            .transition()
            .duration(speed * 100 + 50)
            .attr('y', y1)
            .attr('height', height1);

        // Add a delay after swapping
        setTimeout(() => {
            resolve();
        }, speed * 100 + 75); // +75 to make sure enough time
    });
};*/

export const SwapRectangles = (index1, index2, data, speed) => {
    return new Promise((resolve) => {
        const barWidth = (CHART_WIDTH - 50) / data.length;
        const barHeight = (CHART_HEIGHT - 10) / data.length;

        const temp = data[index1];
        data[index1] = data[index2];
        data[index2] = temp;

        const rect1 = d3.select('rect[index="' + index1 + '"]');
        const rect2 = d3.select('rect[index="' + index2 + '"]');

        // Get the transform values for the rectangles
        const transform1 = rect1.attr('transform');
        const transform2 = rect2.attr('transform');

        // Get the indices for swapping
        const index1Value = rect1.attr('index');
        const index2Value = rect2.attr('index');

        // Swap rectangles visually by updating the transform attribute
        rect1
            .transition()
            .duration(speed * 100 + 50)
            .attr('transform', transform2)
            .attr('index', index2Value);

        rect2
            .transition()
            .duration(speed * 100 + 50)
            .attr('transform', transform1)
            .attr('index', index1Value);

        // Add a delay after swapping
        setTimeout(() => {
            resolve();
        }, speed * 100 + 75); // +75 to make sure enough time
    });
};