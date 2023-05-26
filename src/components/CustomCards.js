import React from 'react'

export const CustomCards = ({Poster, Title, Year, imdbRating,handleOnAddNovieClicked, handleOnDelete, imdbID,
}) => {
  return (
    <div className="card" style={{width: "18rem;", marginTop: "1rem"}}>
  <img src={Poster} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Title}</h5>
    <div className="card-text">
        <div>Rating: {imdbRating} </div>
        <div>Released: {Year}</div>
        </div>
    {
      handleOnAddNovieClicked && <div className="d-flex justify-content-between py-3">
    <button 
    onClick= {()=> handleOnAddNovieClicked("awesome")}className="btn btn-warning">Awesome</button>
    <button 
    onClick= {()=> handleOnAddNovieClicked("boring")} className="btn btn-danger">Boring</button>
    
  </div>
    }
  
  
  <div className="d-grid">
    <button className="btn btn-danger"
    onClick={() => handleOnDelete(imdbID)}>Remove</button>
    </div>
    </div>
</div>
  )
}
