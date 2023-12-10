// Navbar lets the user select from the various sorts that are implemented
// When a sort is clicked, it should change the state of the D3Chart sort ?
import { SelectionSort } from '../Sorts/SelectionSort';
import { MergeSort } from '../Sorts/MergeSort';
import { LoadChart } from '../Utils/LoadChart';
import { Button, ButtonGroup, Slider } from '@mui/material';
import { shuffle } from 'd3';

const Navbar = ({ speed, setSpeed, setData, dataSize, setDataSize, sort, setSort, sortStatus }) => {
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
            <div className="sliders">
                <div className="dataSizeSlider">
                    Data Size
                    <Slider
                        disabled={sortStatus}
                        value={dataSize}
                        step={1}
                        min={5}
                        max={50}
                        onChange={handleDataSizeChange}
                    />
                </div>
                <div className="speedSlider">
                    Speed
                    <Slider
                        disabled={sortStatus}
                        value={speed}
                        aria-label="Temperature"
                        step={1}
                        min={1}
                        max={11}
                        onChange={handleSpeedChange}
                    />
                </div>
            </div>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button disabled={sortStatus} onClick={() => setSort('Merge')} variant={sort === 'Merge' ? 'contained' : 'outlined'}>Merge</Button>
                <Button disabled={sortStatus} onClick={() => setSort('Selection')} variant={sort === 'Selection' ? 'contained' : 'outlined'}>Selection</Button>
            </ButtonGroup>
        </div>
    )
}

export default Navbar