import { SwapRectangles } from "../Utils/SwapRectangles";
import { ColorRectangle } from "../Utils/ColorRectangle";
// Selection sort finds the minIndex, then swaps it to the front
// took out update iteations from both
export const SelectionSort = async (data, speed) => {
    let i, j, minIndex;
    for (i = 0; i < (data.length - 1); i++) {
        //updateIterations()
        await ColorRectangle(i, 'red', speed)
        minIndex = i;
        ColorRectangle(i, 'red')
        for (j = i + 1; j < data.length; j++) {
            //updateIterations()
            await ColorRectangle(j, 'pink', speed)
            ColorRectangle(j, '#2196f3', speed)
            if (data[j] < data[minIndex]) {
                if(minIndex != i) { ColorRectangle(minIndex, '#2196f3') }
                minIndex = j;
                await ColorRectangle(minIndex, 'red', speed)
            }
        }
        //updateIterations()
        await SwapRectangles(parseInt(i), parseInt(minIndex), data, speed)
        ColorRectangle(parseInt(i), "#2196f3")
        await ColorRectangle(parseInt(minIndex), "#2196f3", speed)
    }
}