import { Button, ButtonGroup, Slider } from '@mui/material';
import { shuffle } from 'd3';
import './Navbar.css';

const Navbar = ({ getSpeed, updateSpeed, setData, dataSize, setDataSize, sort, setSort, sortStatus }) => {
    const handleSpeedChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            updateSpeed(10.2 - newValue)
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
                        value={10.2 - getSpeed()}
                        aria-label="Temperature"
                        step={0.5}
                        min={0.2}
                        max={10.2}
                        onChange={handleSpeedChange}
                    />
                </div>
            </div>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button disabled={sortStatus} onClick={() => setSort('Merge')} variant={sort === 'Merge' ? 'contained' : 'outlined'}>Merge</Button>
                <Button disabled={sortStatus} onClick={() => setSort('Selection')} variant={sort === 'Selection' ? 'contained' : 'outlined'}>Selection</Button>
                <Button disabled={sortStatus} onClick={() => setSort('HeapSort')} variant={sort === 'HeapSort' ? 'contained' : 'outlined'}>HeapSort</Button>
            </ButtonGroup>
        </div>
    )
}

export default Navbar