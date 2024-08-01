import { SwapRectangles } from '../Utils/SwapRectangles';
import { ColorRectangle } from '../Utils/ColorRectangle';
import { PRIMARY_COLOR, SORT_COLOR } from '../Components/config';

export const MergeSort = async (data, p, r, speedRef, setIterations, sortStatusRef) => {
  async function merge(data, p, q, r, sortStatusRef) {
    const n1 = q - p + 1; // Left sub-array size
    const n2 = r - q; // Right sub-array size

    const leftArray = new Array(n1);
    const rightArray = new Array(n2);

    for (let i = 0; i < n1; i++) {
      if (!sortStatusRef.current) return;
      leftArray[i] = data[p + i];
      ColorRectangle(p + i, SORT_COLOR, speedRef);
    }
    if (!sortStatusRef.current) return;
    for (let j = 0; j < n2; j++) {
      rightArray[j] = data[q + j + 1];
      ColorRectangle(q + j + 1, SORT_COLOR, speedRef);
    }

    let i = 0;
    let j = 0;
    let k = p;

    while (i < n1 && j < n2) {
      if (!sortStatusRef.current) return;

      setIterations((prevIterations) => prevIterations + 1);

      if (leftArray[i] != rightArray[j]) {
        if (leftArray[i] < rightArray[j]) {
          await SwapRectangles(k, data.indexOf(parseInt(leftArray[i])), data, speedRef);
          i++;
        } else {
          await SwapRectangles(k, data.indexOf(parseInt(rightArray[j])), data, speedRef);
          j++;
        }
      }
      k++;
    }

    while (i < n1) {
      if (!sortStatusRef.current) return;

      setIterations((prevIterations) => prevIterations + 1);
      await SwapRectangles(k, data.indexOf(parseInt(leftArray[i])), data, speedRef);
      i++;
      k++;
    }

    while (j < n2) {
      if (!sortStatusRef.current) return;
      setIterations((prevIterations) => prevIterations + 1);
      await SwapRectangles(k, data.indexOf(parseInt(rightArray[j])), data, speedRef);
      j++;
      k++;
    }
    for (let i = 0; i < n1; i++) {
      if (!sortStatusRef.current) return;
      leftArray[i] = data[p + i];
      ColorRectangle(p + i, PRIMARY_COLOR, speedRef);
    }
    for (let j = 0; j < n2; j++) {
      if (!sortStatusRef.current) return;
      rightArray[j] = data[q + j + 1];
      ColorRectangle(q + j + 1, PRIMARY_COLOR, speedRef);
    }
  }

  if (p >= r || !sortStatusRef.current) return;
  const middle = Math.floor((p + r) / 2);
  await MergeSort(data, p, middle, speedRef, setIterations, sortStatusRef);
  await MergeSort(data, middle + 1, r, speedRef, setIterations, sortStatusRef);
  await merge(data, p, middle, r, sortStatusRef);
};
