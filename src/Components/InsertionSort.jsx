import D3Chart from "./D3Chart";
// Insertion sort finds the minIndex, then swaps it to the front
export const InsertionSort = async (data, swapRectangles) => {
    let i, j, minIndex;
    for (i = 0; i < (data.length - 1); i++) {
        minIndex = i;
        for (j = i + 1; j < data.length; j++) {
            if (data[j] < data[minIndex]) {
                minIndex = j;
            }
        }
        await swapRectangles(parseInt(i), parseInt(minIndex))
    }
}