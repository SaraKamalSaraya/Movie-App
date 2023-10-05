import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

export default function Main_Card({items}) {
    const navigate = useNavigate();
  return (
  <>
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
    </>
  )
}
