import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import EigenCalc from './eigen_calc.tsx'
import EigenCalc2 from './eigen_calc2.tsx'

// class scalar{
//     constructor(value : number){
//         value : number = 0
//     }
// }

export default function App() {
  return (
    <div>
        <EigenCalc/>
    </div>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'))