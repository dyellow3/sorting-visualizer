import { SwapRectangles } from '../Utils/SwapRectangles';

// First, we need to build a max heap
const max_heapify = async (data, index, speedRef, length, setIterations, sortStatusRef) => {
  if (!sortStatusRef.current) return;
  let max = index;
  if ((index * 2 + 1) < length && data[index * 2 + 1] > data[max]) {
    max = index * 2 + 1;
  }
  if ((index * 2 + 2) < length && data[index * 2 + 2] > data[max]) {
    max = index * 2 + 2;
  }

  if (max !== index) {
    setIterations((prevIterations) => prevIterations + 1);
    await SwapRectangles(max, index, data, speedRef);
    await max_heapify(data, max, speedRef, length, setIterations, sortStatusRef);
  }
};

const build_max_heap = async (data, speedRef, setIterations, sortStatusRef) => new Promise(async (resolve) => {
  for (let i = Math.floor(data.length / 2); i >= 0; i--) {
    if (!sortStatusRef.current) return;
    await max_heapify(data, i, speedRef, data.length, setIterations, sortStatusRef);
  }
  // Add a delay after building max heap
  setTimeout(() => {
    resolve();
  }, speedRef.current * 25 + 500);
});

const HeapSort = async (data, speedRef, setIterations, sortStatusRef) => {
  await build_max_heap(data, speedRef, setIterations, sortStatusRef);

  for (let i = data.length - 1; i > 0; i--) {
    if (!sortStatusRef.current) return;
    // swap first and last element
    await SwapRectangles(0, i, data, speedRef);
    setIterations((prevIterations) => prevIterations + 1);
    await max_heapify(data, 0, speedRef, i, setIterations, sortStatusRef);
  }
};

export default HeapSort;
