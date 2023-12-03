import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import { networkInterfaces } from 'os'


export default function EigenCalc() {
    //******************** Change a scalar's value ********************/
    function updateScalarList(event : any){
      console.log(event)
    }
    //******************** Class for scalar and input ********************/
    class inputClass{
      input : any
      constructor(){
        this.input = <input
        // id={scalarList.length.toString()}
        onChange={event => updateScalarList(event)}
        />
      }
    }
  const [scalarList, setScalarList] = React.useState<inputClass[]>([
    new inputClass(),
    new inputClass(),
    new inputClass(),
    new inputClass(),
  ])
  // function addScalar(newValue : number){
  //   setScalarList(prevScalarList => {
  //       let newScalarList = [...prevScalarList]
  //       newScalarList.push(new scalar(prevScalarList.length, newValue))
  //       return newScalarList
  //     }
  //   )
  // }


    

    //******************** Render ********************/
  return (
    <div>
        {scalarList.map(scalar => {
          return scalar.input
        }
        )}
    </div>
  )
}
