// took out update iteations from both
import { SwapRectangles } from "../Utils/SwapRectangles";
import { ColorRectangle } from "../Utils/ColorRectangle";
import { PRIMARY_COLOR, SORT_COLOR } from "../Components/config";
export const MergeSort = async (data, p, r, speed, setIterations) => {
    async function merge(data, p, q, r) {
        let n1 = q - p + 1 // Left sub-array size
        let n2 = r - q // Right sub-array size

        let leftArray = new Array(n1)
        let rightArray = new Array(n2)

        for (let i = 0; i < n1; i++) {
            leftArray[i] = data[p + i]
            ColorRectangle(p+i, `${SORT_COLOR}`, speed)
        }
        for (let j = 0; j < n2; j++) {
            rightArray[j] = data[q + j + 1]
            ColorRectangle(q+j+1, `${SORT_COLOR}`, speed)
        }

        let i = 0
        let j = 0
        let k = p;
        
        // problem when the yellow is equal to the red we are swapping
        while (i < n1 && j < n2) {
            setIterations((prevIterations) => prevIterations + 1)
            // color the two we are comparing
            //colorRectangle(data.indexOf(parseInt(leftArray[i])), "yellow")
            //await colorRectangle(data.indexOf(parseInt(rightArray[j])), "yellow")

            if(leftArray[i] === rightArray[j]) {
            }

        
            else if (leftArray[i] < rightArray[j]) {
                
                //colorRectangle(k, `${SORT_COLOR}`)
                await SwapRectangles(k, data.indexOf(parseInt(leftArray[i])), data, speed)
                //colorRectangle(data.indexOf(parseInt[leftArray[i]]), "green")
                //colorRectangle(k, "green")
                i++
            }
            else {
                //colorRectangle(k, `${SORT_COLOR}`)
                await SwapRectangles(k, data.indexOf(parseInt(rightArray[j])), data, speed)
                //colorRectangle(data.indexOf(parseInt[rightArray[j]]), "green")
                //colorRectangle(k, "green")
                j++
            }
            k++
        }

        while (i < n1) {
            setIterations((prevIterations) => prevIterations + 1)
            //colorRectangle(k, `${SORT_COLOR}`)
            await SwapRectangles(k, data.indexOf(parseInt(leftArray[i])), data, speed)
            //colorRectangle(data.indexOf(parseInt[leftArray[i]]), "green")
            //colorRectangle(k, "green")
            i++
            k++
        }

        while (j < n2) {
            setIterations((prevIterations) => prevIterations + 1)
            //colorRectangle(k, `${SORT_COLOR}`)
            await SwapRectangles(k, data.indexOf(parseInt(rightArray[j])), data, speed)
            //colorRectangle(data.indexOf(parseInt[rightArray[j]]), "green")
            //colorRectangle(k, "green")
            j++
            k++
        }
        for (let i = 0; i < n1; i++) {
            leftArray[i] = data[p + i]
            ColorRectangle(p+i, `${PRIMARY_COLOR}`, speed)
        }
        for (let j = 0; j < n2; j++) {
            rightArray[j] = data[q + j + 1]
            ColorRectangle(q+j+1, `${PRIMARY_COLOR}`, speed)
        }
    }

    if (p >= r) { return; }
    let middle = Math.floor((p + r) / 2);
    await MergeSort(data, p, middle, speed, setIterations)
    await MergeSort(data, middle + 1, r, speed, setIterations)
    await merge(data, p, middle, r)

}