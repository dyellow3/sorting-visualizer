// Navbar lets the user select from the various sorts that are implemented
// When a sort is clicked, it should change the state of the D3Chart sort ?
import { SelectionSort } from './Sorts/SelectionSort';
import { MergeSort } from './Sorts/MergeSort';
import { LoadChart } from './Utils/LoadChart';
import { Button, ButtonGroup, Slider } from '@mui/material';
import { shuffle } from 'd3';

const Navbar = ({ speed, setSpeed, svgRef, data, setData, dataSize, setDataSize, sort, setSort, sortStatus, setSortStatus }) => {

    const handleRandomize = () => {
        setData(shuffle(data))
        LoadChart(data, svgRef)
    }

    const handleSort = async () => {
        // !! Update !!
        if (!sortStatus) {
            //setIterations(0)
            setSortStatus(true);
            if (sort === 'Selection') {
                await SelectionSort(data, speed)
            }
            else if (sort === 'Merge') {
                // took out update iteations from both
                await MergeSort(data, 0, data.length - 1, speed)
            }
            setSortStatus(false);
        }
    }

    const handleSpeedChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setSpeed(newValue)
        }
    }

    const handleDataSizeChange = (event, newValue) => {
        setDataSize(newValue);
        setData(shuffle([...Array(dataSize).keys()]))
    }

    return (
        <div className="Navbar">
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button disabled={sortStatus} onClick={handleRandomize}>Randomize</Button>
                <Button disabled={sortStatus} onClick={handleSort}>Sort</Button>
            </ButtonGroup>
            <div id="sliders">
                Data size
                <Slider
                    disabled={sortStatus}
                    value={dataSize}
                    valueLabelDisplay="auto"
                    step={1}
                    min={5}
                    max={50}
                    onChange={handleDataSizeChange}
                />
                Speed
                <Slider
                    disabled={sortStatus}
                    value={speed}
                    aria-label="Temperature"
                    valueLabelDisplay="auto"
                    step={1}
                    min={1}
                    max={11}
                    onChange={handleSpeedChange}
                />
            </div>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button disabled={sortStatus} onClick={() => setSort('Merge')} variant={sort === 'Merge' ? 'contained' : 'outlined'}>Merge</Button>
                <Button disabled={sortStatus} onClick={() => setSort('Selection')} variant={sort === 'Selection' ? 'contained' : 'outlined'}>Selection</Button>
            </ButtonGroup>
        </div>
    )
}

export default Navbar