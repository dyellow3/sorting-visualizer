export class SortUtils {
    static async swapRectangles(index1, index2, data, updateChart) {
        const temp = data[index1]
        data[index1] = data[index2]
        data[index2] = temp

        updateChart(index1, index2)
    }
}