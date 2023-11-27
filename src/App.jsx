import { useState } from 'react'
import './App.css'
import D3Chart from './Components/D3Chart'
import { shuffle } from 'd3';

function App() {
  const [count, setCount] = useState(0)
  var dataarr = [...Array(50).keys()];;

  shuffle(dataarr)

  return (
    <>
      <div className="header">

      </div>
      <main>
        <D3Chart data={dataarr} />
      </main>
      
    </>
  )
}

export default App
