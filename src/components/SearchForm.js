import React from 'react'
import { CustomCards } from './CustomCards'
import { useState } from 'react'

import { fetchData } from '../Helper/axiosHelper'


export const SearchForm = ({adToList, }) => {
    const [form, setForm] = useState("")
    const [movie, setMovie] = useState ({})
    const [isError, setIsError ] = useState(false)
    // get data from the form on change

    const handleOnChange = e => {
        const {value}= e.target
        
        setForm(value)
    }
    // use data from form to call api after form is submitted
    const handleOnSubmit = async (e)=> {
        e.preventDefault()
        // call the api

        const data = await fetchData (form);
        if(data?.imdbID){
            setMovie(data)
            setIsError(false)

        } else{
            setIsError(true)
            setMovie({})
        }
         
       
    }
    const handleOnAddNovieClicked = (type) => {
        console.log(type)
        adToList({...movie, type})
        setMovie({})
        
    }
    const handleOnDelete = () => {
        setMovie({});
      };


  return (
    <div className="search-form">
    <form action="" onSubmit={handleOnSubmit}>
    <div className="row gap-2 ">
  <div className="col-md-9 ">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name" onChange= {handleOnChange} required/>
  </div>
  <div className="col-md-3 d-grid">
  <button className="btn btn-warning ">Search</button>
  </div>
</div>
</form>
<div className="d-flex justify-content-center">
{movie.imdbID && <CustomCards {...movie} handleOnAddNovieClicked = {handleOnAddNovieClicked} handleOnDelete={handleOnDelete}/>}

{isError && <div className="alert alert-danger"> No Movie Found </div>}
</div>
</div>
  )
}
