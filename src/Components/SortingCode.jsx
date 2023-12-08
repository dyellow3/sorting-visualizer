
import { CopyBlock, CodeBlock } from 'react-code-blocks';


export const SortingCode = ({ sort }) => {
    let code;
    switch (sort) {
        case 'Merge':
            code = 
`function merge(, l, m, r) {
    merge code here
}
            
function mergeSort(arr, l, r) {
    mergeSort code here
}`
            break

        case 'Selection':
            code = `selectionSort(arr) {
        n = arr.length
        for(i=0; i<n; i++)
            minIndex = 0
            for(j=i+1; j<n; j++)
                if arr[j] < arr[minIndex]
                    minIndex = j
                    swap(arr[i], arr[minIndex])
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
                    overflow: 'hidden'
                }}
                
            />
    </div>
    </>
}
