import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import { networkInterfaces } from 'os'
import "./eigen_calc.css"


export default function EigenCalc() {

  const [scalarList, setScalarList] = React.useState<any[]>([])
  function addScalar(newValue : number){
    setScalarList(prevScalarList => {
        let newScalarList = [...prevScalarList]
        newScalarList.push(new scalar(prevScalarList.length, newValue))
        return newScalarList
      }
    )
  }
  //******************** Change a scalar's value ********************/
  function updateScalarList(id : number, event : any){
    setScalarList(prevScalarList => {
        let newScalarList = [...prevScalarList]
        newScalarList[id] = new scalar(id, event.target.value)
        return newScalarList
      }
    )
  }
  //******************** Class for scalar and input ********************/
  class scalar{
    value : number
    input : any
    id : number
    constructor(id: number, value : number){
        this.id = id
        this.value = value
        this.input = <input
                        className={"scalar"}
                        value={this.value}
                        onChange={(event) => updateScalarList(this.id, event)}
                      />
    }
}
    
React.useEffect(() => {
  for(let i=0; i < 8; i++){
    addScalar(0)
  }
  
}
, [])
    //******************** Render ********************/
  return (
    <div>
      <div className={"matrix"}>

        {scalarList.slice(0,2).map(scalar => {
          return <div>
            {scalar.input}
          </div>
        }
        )}
      </div>
    </div>
  )
}
