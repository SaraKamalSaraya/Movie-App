import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Stars from './Stars';
import NoImgFound from './NoImgFound'

import Love_Icon from './Love_Icon';

export default function Main_Card({items}) {
  const navigate = useNavigate();
  
  return (
  <>
    {items.map((movie) => (
        <div key={movie.id} className="card border-0 potition-relative"
          style={{ width: '12rem', borderRadius: '1rem', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: '1px solid #ccc' }}
          onClick={() => navigate(`/movie-details/${movie.id}`)}
        >
          {movie.poster_path ? 
           <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" style={{ borderRadius: '1rem 1rem 0 0' }} alt={movie.title} />
           :
           <NoImgFound/>
          }
          
          <div className="card-body">
            <h5 className="card-title fw-bold text-black">{movie.title}</h5>
            <Stars rating={movie.vote_average}/>
            <div className='justify-content-between'>
              <p className="card-text text-secondary">{movie.release_date}</p>
              <div className='d-flex position-absolute bottom-0 end-0 m-3'>
              <Love_Icon movie={movie}/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}


