export const MergeSort = async (data, p, r, swapRectangles, colorRectangle, updateIterations) => {
    async function merge(data, p, q, r) {
        let n1 = q - p + 1 // Left sub-array size
        let n2 = r - q // Right sub-array size

        let leftArray = new Array(n1)
        let rightArray = new Array(n2)

        for (let i = 0; i < n1; i++) {
            leftArray[i] = data[p + i]
            colorRectangle(p+i, "red")
        }
        for (let j = 0; j < n2; j++) {
            rightArray[j] = data[q + j + 1]
            colorRectangle(q+j+1, "red")
        }

        let i = 0
        let j = 0
        let k = p;
        
        // problem when the yellow is equal to the red we are swapping
        while (i < n1 && j < n2) {
            updateIterations()
            // color the two we are comparing
            //colorRectangle(data.indexOf(parseInt(leftArray[i])), "yellow")
            //await colorRectangle(data.indexOf(parseInt(rightArray[j])), "yellow")

            if(leftArray[i] === rightArray[j]) {
            }

        
            else if (leftArray[i] < rightArray[j]) {
                
                //colorRectangle(k, "red")
                await swapRectangles(k, data.indexOf(parseInt(leftArray[i])))
                //colorRectangle(data.indexOf(parseInt[leftArray[i]]), "green")
                //colorRectangle(k, "green")
                i++
            }
            else {
                //colorRectangle(k, "red")
                await swapRectangles(k, data.indexOf(parseInt(rightArray[j])))
                //colorRectangle(data.indexOf(parseInt[rightArray[j]]), "green")
                //colorRectangle(k, "green")
                j++
            }
            k++
        }

        while (i < n1) {
            updateIterations()
            //colorRectangle(k, "red")
            await swapRectangles(k, data.indexOf(parseInt(leftArray[i])))
            //colorRectangle(data.indexOf(parseInt[leftArray[i]]), "green")
            //colorRectangle(k, "green")
            i++
            k++
        }

        while (j < n2) {
            updateIterations()
            //colorRectangle(k, "red")
            await swapRectangles(k, data.indexOf(parseInt(rightArray[j])))
            //colorRectangle(data.indexOf(parseInt[rightArray[j]]), "green")
            //colorRectangle(k, "green")
            j++
            k++
        }
        for (let i = 0; i < n1; i++) {
            leftArray[i] = data[p + i]
            colorRectangle(p+i, "black")
        }
        for (let j = 0; j < n2; j++) {
            rightArray[j] = data[q + j + 1]
            colorRectangle(q+j+1, "black")
        }
    }
    if (p >= r) { return; }
    let middle = Math.floor((p + r) / 2);
    await MergeSort(data, p, middle, swapRectangles, colorRectangle, updateIterations)
    await MergeSort(data, middle + 1, r, swapRectangles, colorRectangle, updateIterations)
    await merge(data, p, middle, r)

}