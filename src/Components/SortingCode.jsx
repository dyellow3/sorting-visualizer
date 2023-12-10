
import { CopyBlock, CodeBlock } from 'react-code-blocks';


export const SortingCode = ({ sort }) => {
    let code;
    switch (sort) {
        case 'Merge':
            code = 
`function mergeSort(arr, left, right) {
    // Divide and conquer!
    mergeSort(arr, left, right)
    mergeSort(arr, middle, right)
    merge(arr, left, middle, right)
}

function merge(arr, left, middle, right) {
    var n1 = middle - left + 1
    var n2 = right - middle

    // Instantiate and fill left and right arr
    let leftArr = new Array(n1)
    let rightArr = new Array(n2)
    for(var i = 0; i < n1; i++)  
        leftArr[i] = arr[left + i]
    for(var j = 0; j < n2; j++) 
        rightArr[j] = arr[middle + 1 + j]

    var i = 0
    var j = 0
    var k = left

    // Run until we reach end of either arr
    while(i < n1 && j < n2) {
        if(leftArr[i] <= rightArr[j]) {
            arr[k] = leftArray[i]
            i++
        }
        else {
            arr[k] = rightArr[j]
            j++
        }
    }
    // Fill with rest of leftArray
    // if it is not empty
    while(i < n1) {
        arr[k] = leftArr[i]
        i++
        k++
    }
    // Fill with rest of rightArr
    // if it is not empty
    while(i < n1) {
        arr[k] = rightArr[j]
        j++
        k++
    }   
}`
            break

        case 'Selection':
            code = 
            `function selectionSort(arr) {
        var n = arr.length
        for(var i = 0; i < n; i++) {
            var minIndex = 0
        }
            for(var j = i+1; j < n; j++) {
                if arr[j] < arr[minIndex] {
                    minIndex = j
                    swap(arr[i], arr[minIndex])
                }
            }
    }`
            break

        default:
            code = <div>No code available for the selected sort type</div>
            break
    }
    

    return <>
        <div className="sortCode">
            <CodeBlock
                text={code}
                language='javascript'
                showLineNumbers={true}
                theme='atom-one-dark'
                customStyle={{
                    overflow: 'auto',
                    height: 'min-content',
                    maxHeight: 490,
                    width: '100%',
                }}
                
            />
    </div>
    </>
}
