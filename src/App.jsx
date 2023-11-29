import { useState } from 'react'
import './App.css'
import D3Chart from './Components/D3Chart'
import { shuffle } from 'd3';

function App() {
  var dataarr = [...Array(10).keys()];;

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
