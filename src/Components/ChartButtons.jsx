import { shuffle } from 'd3';
import { ButtonGroup, Button } from '@mui/material';
import { SelectionSort } from '../Sorts/SelectionSort';
import { MergeSort } from '../Sorts/MergeSort';
import HeapSort from '../Sorts/HeapSort';
import { LoadChart } from '../Utils/LoadChart';
import { ColorRectangle } from '../Utils/ColorRectangle';
import { PRIMARY_COLOR } from './config';

function ChartButtons({
  data, setData, svgRef, sort, sortStatus, setSortStatus, setIterations, speedRef, sortStatusRef,
}) {
  const handleRandomize = () => {
    setData(shuffle(data));
    LoadChart(data, svgRef);
  };

  const handleSort = async () => {
    if (!sortStatus) {
      setIterations(0);
      setSortStatus(true);
      sortStatusRef.current = true;
      if (sort === 'Selection') {
        await SelectionSort(data, speedRef, setIterations, sortStatusRef);
      } else if (sort === 'Merge') {
        await MergeSort(data, 0, data.length - 1, speedRef, setIterations, sortStatusRef);
      } else if (sort === 'HeapSort') {
        console.log(`STATUS${sortStatusRef.current}`);
        await HeapSort(data, speedRef, setIterations, sortStatusRef);
      }
      setSortStatus(false);
      sortStatusRef.current = false;
      // Reset colors
      data.forEach((_, index) => {
        ColorRectangle(index, PRIMARY_COLOR, speedRef);
      });
    }
  };

  const handleStop = () => {
    setSortStatus(false);
    sortStatusRef.current = false;
  };

  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      {sortStatus ? (
        <Button onClick={handleStop}>Stop</Button>
      ) : (
        <>
          <Button onClick={handleRandomize}>Randomize</Button>
          <Button onClick={handleSort}>Sort</Button>
        </>
      )}
    </ButtonGroup>
  );
}

export default ChartButtons;
