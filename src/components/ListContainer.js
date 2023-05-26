import React, { useEffect } from 'react'
import { useState } from 'react'
import {CustomCards} from "./CustomCards"

export const ListContainer = ({movieList, handleOnDelete}) => {

    const[display, setDisplay] = useState([])

    useEffect(()=>(
        setDisplay(movieList)
    ), [movieList])

    const handleOnFilter= (type)=>{
        if(type ==="all"){
            return setDisplay(movieList)
        }
    const filteredArg = movieList.filter(item => item.type ===type)
    setDisplay(filteredArg)


    }
    
  return (
    <div className="list-container">
        <div class="btn-group" role="group" aria-label="Basic example">
  <button
   onClick={()=>handleOnFilter("all")} 
   type="button" 
   class="btn btn-primary ">All</button>
  <button 
  onClick={()=> handleOnFilter("awesome")} 
  type="button" 
  class="btn btn-warning">Awesome</button>
  <button 
  onClick={()=> handleOnFilter("boring")}
  type="button" 
  class="btn btn-danger">Bad</button>
</div>
<div className="mt-3">{display.length} - movie found</div>
<hr />
<div className="d-flex flex-wrap justify-content-around gap-2">
{display?.map((item) =>  (
<CustomCards {...item} handleOnDelete={handleOnDelete} />
))}
    </div>
    </div>
  )
}
