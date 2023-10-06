import React from 'react'
import { useParams } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { useState, useEffect } from 'react';
import Stars from '../../shared/Stars';

function Movie_Details() {
  const API_KEY = process.env.REACT_APP_API_KEY; //apikey
  const prams = useParams()
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios
        .get(`https://api.themoviedb.org/3/movie/${prams.id}?api_key=${API_KEY}`)
        .then((res) => setMovie(res.data))
        .catch((err) => console.log(err))
}, [])
  return (
    <div className='mov-details'>
    <div className='row' style={{justifyContent:"space-between"}}>
      <div className='col-lg-3 col-md-4 col-sm-6' style={{height:"600px"}}>
        <div style={{height:"100%",width:"100%",padding:"25px"}}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{width:"100%",height:"100%",borderRadius:"27px"}}/>
        </div>
      </div>

      <></>

      <div className='col-lg-9 col-md-8 col-sm-6' style={{padding:"25px"}}>
        <div style={{height:"100%",width:"70%",padding:"25px"}}>
          <h1 className='p-3'>{movie.title}</h1>
          <Stars rating={movie.vote_average}/>
          {/* <h1 className='p-3 text-success'>* * * * *</h1> */}
          <p className='p-3'>{movie.overview}</p>
          <div className='category row mx-2'>
          <button className='btn btn-warning mx-2 col-2'>Action</button>
          <button className='btn btn-warning mx-2 col-2'>Crime</button>
          <button className='btn btn-warning mx-2 col-2'>Thriller</button>
          </div>
          <div className='time-lang d-flex row p-3'>
            <p className='col-6'>Duration : 134 mn</p>
            <p className='col-6'>language : {movie.original_language}</p>
          </div>
          <div className='stdio-img m-3' style={{height:"47px",width:"210px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZmU4EgLtHcFjqxnhjO1E4dky785IkhJVtYnvdKe0eb1OMfUTwo2VCAPtYflfEqWYjTM&usqp=CAU" style={{height:"100%",width:"100%"}}/>
          </div>
          <button className='btn btn-success m-3'>Website@</button>
        </div>
      </div>
    </div>
    <hr style={{ margin:"32px",border: "1px solid black" }} />
      
    </div>
  )
}

export default Movie_Details ;