import './IterationCount.css';

function IterationCount(iterations) {
  return (
    <div className="iterationCount">
      {iterations.iterations}
      {' '}
      ITERATIONS
    </div>
  );
}

export default IterationCount;
