import { SwapRectangles } from "../Utils/SwapRectangles";
import { ColorRectangle } from "../Utils/ColorRectangle";
import { PRIMARY_COLOR } from "../Components/config";

// First, we need to build a max heap
const max_heapify = async (data, index, speed, length, setIterations) => {
    var max = index
    if ((index * 2 + 1) < length && data[index * 2 + 1] > data[max]) {
        max = index * 2 + 1
    }
    if ((index * 2 + 2) < length && data[index * 2 + 2] > data[max]) {
        max = index * 2 + 2
    }

    if (max !== index) {
        setIterations((prevIterations) => prevIterations + 1)
        await SwapRectangles(max, index, data, speed)

        await max_heapify(data, max, speed, length, setIterations)
    }
}

const build_max_heap = async (data, speed, setIterations) => {
    return new Promise(async resolve => {
        for (var i = Math.floor(data.length / 2); i >= 0; i--) {
            await max_heapify(data, i, speed, data.length, setIterations)
        }
        // Add a delay after swapping
        setTimeout(() => {
            resolve();
        }, speed * 25 + 500)
    })
}

const HeapSort = async (data, speed, setIterations) => {
    await build_max_heap(data, speed, setIterations)

    for (var i = data.length - 1; i > 0; i--) {
        // swap first and last element
        await SwapRectangles(0, i, data, speed)
        setIterations((prevIterations) => prevIterations + 1)

        await max_heapify(data, 0, speed, i, setIterations)
    }
    console.log(data)
}

export default HeapSort