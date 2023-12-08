
import { LoadChart } from './Components/Utils/LoadChart';
import { SwapRectangles } from './Components/Utils/SwapRectangles';
import { ColorRectangle } from './Components/Utils/ColorRectangle';
import D3Chart from './Components/D3Chart'
import Navbar from './Components/Navbar'
import IterationCount from './Components/IterationCount';
import { SortingCode } from './Components/SortingCode';
import React, { useRef, useState } from 'react';
import { shuffle } from 'd3';

function App() {
  const svgRef = useRef();
  const [sort, setSort] = useState('Selection')
  const [sortStatus, setSortStatus] = useState(false)
  const [data, setData] = useState(shuffle([...Array(10).keys()]))
  const [dataSize, setDataSize] = useState(10)
  const [iterations, setIterations] = useState(0)
  const [speed, setSpeed] = useState(0.1)
  return (
    <>
      <Navbar iterations={iterations} setIterations={setIterations} speed={speed} setSpeed={setSpeed} svgRef={svgRef} data={data} setData={setData} dataSize={dataSize} setDataSize={setDataSize} sort={sort} setSort={setSort} sortStatus={sortStatus} setSortStatus={setSortStatus} />
      <div className="container">
        <SortingCode sort={sort}/>
        <D3Chart svgRef={svgRef} data={data} />
        <IterationCount iterations={iterations}/>
      </div>

    </>
  )
}

export default App
