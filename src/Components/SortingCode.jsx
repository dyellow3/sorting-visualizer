

const SortingCode = ( { sort } ) => {
    let code;
    switch (sort) {
        case 'Merge':
            code = (
                <pre>
                    {`
                    function merge(arr, l, m, r) {
                        merge code here
                    }

                    function mergeSort(arr, l, r) {
                        code here
                    }
                    `}
                </pre>
            )
            break

        case 'Selection':
            code = (
                <pre>
                    {`
                    for i=0 to n
                        min index = 0
                        for j=i+1 to n
                            `}
                <span className='selection1'>if A[j] &lt; A[minIndex]</span>
                {`
                            `}
                <span className='selection2'>minIndex = j</span>
                {`
                        `}
                <span className='selection3'>swap A[i] and A[minIndex]</span>
                </pre>
            )
            break

        default:
            code = <div>No code available for the selected sort type</div>
            break
    }
    return <>{code}</>
}

export default SortingCode