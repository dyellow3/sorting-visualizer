import { SwapRectangles } from "../Utils/SwapRectangles";
import { ColorRectangle } from "../Utils/ColorRectangle";
import { PRIMARY_COLOR, SORT_COLOR, SECONDARY_SORT_COLOR } from "../Components/config";

// Selection sort finds the minIndex, then swaps it to the front
// took out update iteations from both
export const SelectionSort = async (data, speed, setIterations) => {
    let i, j, minIndex;
    for (i = 0; i < (data.length - 1); i++) {
        setIterations((prevIterations) => prevIterations + 1)
        await ColorRectangle(i, `${SORT_COLOR}`, speed)
        minIndex = i;
        ColorRectangle(i, `${SORT_COLOR}`)
        for (j = i + 1; j < data.length; j++) {
            setIterations((prevIterations) => prevIterations + 1)
            await ColorRectangle(j, `${SECONDARY_SORT_COLOR}`, speed)
            ColorRectangle(j, `${PRIMARY_COLOR}`, speed)
            if (data[j] < data[minIndex]) {
                if(minIndex != i) { ColorRectangle(minIndex, `${PRIMARY_COLOR}`) }
                minIndex = j;
                await ColorRectangle(minIndex, `${SORT_COLOR}`, speed)
            }
        }
        setIterations((prevIterations) => prevIterations + 1)
        await SwapRectangles(parseInt(i), parseInt(minIndex), data, speed)
        ColorRectangle(parseInt(i), `${PRIMARY_COLOR}`)
        await ColorRectangle(parseInt(minIndex), `${PRIMARY_COLOR}`, speed)
    }
}