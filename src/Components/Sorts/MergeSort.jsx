// took out update iteations from both
import { SwapRectangles } from "../Utils/SwapRectangles";
import { ColorRectangle } from "../Utils/ColorRectangle";
export const MergeSort = async (data, p, r, speed) => {
    async function merge(data, p, q, r) {
        let n1 = q - p + 1 // Left sub-array size
        let n2 = r - q // Right sub-array size

        let leftArray = new Array(n1)
        let rightArray = new Array(n2)

        for (let i = 0; i < n1; i++) {
            leftArray[i] = data[p + i]
            ColorRectangle(p+i, "red", speed)
        }
        for (let j = 0; j < n2; j++) {
            rightArray[j] = data[q + j + 1]
            ColorRectangle(q+j+1, "red", speed)
        }

        let i = 0
        let j = 0
        let k = p;
        
        // problem when the yellow is equal to the red we are swapping
        while (i < n1 && j < n2) {
            //updateIterations()
            // color the two we are comparing
            //colorRectangle(data.indexOf(parseInt(leftArray[i])), "yellow")
            //await colorRectangle(data.indexOf(parseInt(rightArray[j])), "yellow")

            if(leftArray[i] === rightArray[j]) {
            }

        
            else if (leftArray[i] < rightArray[j]) {
                
                //colorRectangle(k, "red")
                await SwapRectangles(k, data.indexOf(parseInt(leftArray[i])), data, speed)
                //colorRectangle(data.indexOf(parseInt[leftArray[i]]), "green")
                //colorRectangle(k, "green")
                i++
            }
            else {
                //colorRectangle(k, "red")
                await SwapRectangles(k, data.indexOf(parseInt(rightArray[j])), data, speed)
                //colorRectangle(data.indexOf(parseInt[rightArray[j]]), "green")
                //colorRectangle(k, "green")
                j++
            }
            k++
        }

        while (i < n1) {
            //updateIterations()
            //colorRectangle(k, "red")
            await SwapRectangles(k, data.indexOf(parseInt(leftArray[i])), data, speed)
            //colorRectangle(data.indexOf(parseInt[leftArray[i]]), "green")
            //colorRectangle(k, "green")
            i++
            k++
        }

        while (j < n2) {
            //updateIterations()
            //colorRectangle(k, "red")
            await SwapRectangles(k, data.indexOf(parseInt(rightArray[j])), data, speed)
            //colorRectangle(data.indexOf(parseInt[rightArray[j]]), "green")
            //colorRectangle(k, "green")
            j++
            k++
        }
        for (let i = 0; i < n1; i++) {
            leftArray[i] = data[p + i]
            ColorRectangle(p+i, "#2196f3", speed)
        }
        for (let j = 0; j < n2; j++) {
            rightArray[j] = data[q + j + 1]
            ColorRectangle(q+j+1, "#2196f3", speed)
        }
    }
    if (p >= r) { return; }
    let middle = Math.floor((p + r) / 2);
    await MergeSort(data, p, middle, speed)
    await MergeSort(data, middle + 1, r, speed)
    await merge(data, p, middle, r)

}