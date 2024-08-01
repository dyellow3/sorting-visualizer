import { SwapRectangles } from "../Utils/SwapRectangles";
import { ColorRectangle } from "../Utils/ColorRectangle";
import { PRIMARY_COLOR, SORT_COLOR, SECONDARY_SORT_COLOR } from "../Components/config";

export const SelectionSort = async (data, speedRef, setIterations) => {
    let i, j, minIndex;
    for (i = 0; i < (data.length - 1); i++) {
        setIterations((prevIterations) => prevIterations + 1)
        await ColorRectangle(i, `${SORT_COLOR}`, speedRef)
        minIndex = i;
        ColorRectangle(i, `${SORT_COLOR}`, speedRef)
        for (j = i + 1; j < data.length; j++) {
            setIterations((prevIterations) => prevIterations + 1)
            await ColorRectangle(j, `${SECONDARY_SORT_COLOR}`, speedRef)
            ColorRectangle(j, `${PRIMARY_COLOR}`, speedRef)
            if (data[j] < data[minIndex]) {
                if(minIndex != i) { ColorRectangle(minIndex, `${PRIMARY_COLOR}`, speedRef) }
                minIndex = j;
                await ColorRectangle(minIndex, `${SORT_COLOR}`, speedRef)
            }
        }
        setIterations((prevIterations) => prevIterations + 1)
        await SwapRectangles(parseInt(i), parseInt(minIndex), data, speedRef)
        ColorRectangle(parseInt(i), `${PRIMARY_COLOR}`, speedRef)
        await ColorRectangle(parseInt(minIndex), `${PRIMARY_COLOR}`, speedRef)
    }
}