
import { useState } from 'react';
import './App.css';
import { ListContainer } from './components/ListContainer';
import { SearchForm } from './components/SearchForm';

function App({}) {

  const [movieList, setMovieList] = useState([])
  const adToList = (movie) => {
    const arg = movieList.filter((item) => item.imbdID !== movie.imdbID);
    
    setMovieList([...arg, movie])
  }
  const handleOnDelete = (id) => {
    console.log(id)
    const arg = movieList.filter((item) => item.imdbID !== id);
    console.log(arg)
    setMovieList(arg)
  }

  return (
    <div className="wrapper bg-dark text-warning">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5 fs-1">
             {/* title section */}
            My movie API 
          </div>
        </div>
         {/* form section */}
         
         <SearchForm adToList = {adToList} />

{/* list sectiopn  */}
    <ListContainer movieList={movieList} handleOnDelete={handleOnDelete} />
      </div>
    </div>
  );
}

export default App;
