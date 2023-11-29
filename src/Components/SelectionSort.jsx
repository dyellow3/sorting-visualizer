import { color } from "d3";
import D3Chart from "./D3Chart";
// Selection sort finds the minIndex, then swaps it to the front
export const SelectionSort = async (data, swapRectangles, colorRectangle, updateIterations) => {
    let i, j, minIndex;
    for (i = 0; i < (data.length - 1); i++) {
        updateIterations()
        await colorRectangle(i, 'red')
        minIndex = i;
        colorRectangle(i, 'red')
        for (j = i + 1; j < data.length; j++) {
            updateIterations()
            await colorRectangle(j, 'pink')
            colorRectangle(j, 'black')
            if (data[j] < data[minIndex]) {
                if(minIndex != i) { colorRectangle(minIndex, 'black') }
                minIndex = j;
                await colorRectangle(minIndex, 'red')
            }
        }
        updateIterations()
        await swapRectangles(parseInt(i), parseInt(minIndex))
        colorRectangle(parseInt(i), "black")
        await colorRectangle(parseInt(minIndex), "black")
    }
}