import { CodeBlock, obsidian } from 'react-code-blocks';
import './SortingCode.css'

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
        for(var j = i+1; j < n; j++) {
            if arr[j] < arr[minIndex] {
                minIndex = j
                swap(arr[i], arr[minIndex])
            }
        }
    }
}`
            break
        
        case 'HeapSort': 
            code =
`function heapSort(arr) {
    // Build a max heap
    buildMaxHeap(arr)
    // then repeatedly get swap first and last
    for(var i = arr.length-1; i > 0; i--) {
        // Notice i as the length parameter
        maxHeapify(arr, 0, i)
    }
}

function buildMaxHeap(arr) {
    for(var i = Math.floor(arr.length/2); i >= 0; i--) {
        maxHeapify(arr, i, arr.length)
    }
}

// Moves index to its correct position 
// which satisfies the max heap property
function maxHeapify(arr, index, length) {
    var max = index
    var leftChild = index*2+1
    var rightChild = index*2+2
    if(leftChild<length && arr[leftChild] > data[max]) {
        max = leftChild
    }
    if(rightChild<length && arr[rightChild] > data[max]) {
        max = rightChild
    }
    if(max != index) {
        maxHeapify(arr, max, length)
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
                showLineNumbers={false}
                theme={obsidian}
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
