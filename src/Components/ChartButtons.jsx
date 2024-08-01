import { SelectionSort } from "../Sorts/SelectionSort"
import { MergeSort } from "../Sorts/MergeSort"
import HeapSort from "../Sorts/HeapSort"
import { shuffle } from "d3"
import { ButtonGroup, Button } from "@mui/material"
import { LoadChart } from "../Utils/LoadChart"

const ChartButtons = ({data, setData, svgRef, sort, sortStatus, setSortStatus, setIterations, speedRef}) => {
    const handleRandomize = () => {
        setData(shuffle(data))
        LoadChart(data, svgRef)
    }

    const handleSort = async () => {
        // !! Update !!
        if (!sortStatus) {
            setIterations(0)
            setSortStatus(true)
            if (sort === 'Selection') {
                await SelectionSort(data, speedRef, setIterations)
            }
            else if (sort === 'Merge') {
                await MergeSort(data, 0, data.length - 1, speedRef, setIterations)
            }
            else if (sort === 'HeapSort') {
                await HeapSort(data, speedRef, setIterations)
            }
            setSortStatus(false);
        }
    }

    return <>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button disabled={sortStatus} onClick={handleRandomize}>Randomize</Button>
            <Button disabled={sortStatus} onClick={handleSort}>Sort</Button>
        </ButtonGroup>
    </>
}

export default ChartButtons