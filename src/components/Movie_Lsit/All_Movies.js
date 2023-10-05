import React, { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function All_Movies() {


  //this api call changer page 
  const API_KEY = process.env.REACT_APP_API_KEY; //apikey
  const[page,setPage] = useState(1);
  const[items,setItems] = useState([]);
  useEffect(()=>{
    const PageURL=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
    axios.get(PageURL).then((res)=>{
      setItems(res.data.results)
    }).catch((err)=>{
      console.log(err);
    });
  },[page]);

  
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1); 
    }
  };

  const handleNextPage = () => {
    setPage(page + 1); 
  };


  //this api call pase page 

  // const [movies,setMovies] = useState([]);
  // useEffect(()=>{
  //   const mainURL  = process.env.REACT_APP_BASE_URL;
  //   axios.get(mainURL).then((res)=>{
  //     console.log(res.data.results);
  //     setMovies(res.data.results);
  //   }).catch((err)=>{
  //     console.log(err);
  //   });
  // },[page]);

  const navigate = useNavigate();

  return (
    <div>
      <div className='my-5 text-start'>
        <h3 className='text-black fw-bold'>Popular Movies</h3>
        <button onClick={handlePreviousPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
        {/* Cards */}
        <div className='d-flex flex-wrap justify-content-between'>
          {items.map((movie) => (
            <div key={movie.id} className="card border-0"
              style={{ width: '12rem', borderRadius: '1rem', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: '1px solid #ccc' }}
              onClick={() => navigate(`/movie-details/${movie.id}`)}
            >
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" style={{ borderRadius: '1rem 1rem 0 0' }} alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title fw-bold text-black">{movie.title}</h5>
                <div className='d-flex justify-content-between'>
                  <p className="card-text text-secondary">{movie.release_date}</p>
                  <FontAwesomeIcon icon={faHeart} style={{ color: "#fbe352", fontSize: '1.5rem' }} className='' onClick={()=>{}} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}