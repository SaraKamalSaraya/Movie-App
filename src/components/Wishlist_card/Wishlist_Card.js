import React from 'react';
import 'material-icons/iconfont/material-icons.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AddToWatchList } from '../../store/slices/watchList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Stars from '../../shared/Stars';



const MovieCard = () => {

  const whatchListMovies = useSelector(state=>state.WatchListData.data);

  const dispatch = useDispatch();
  const handleAddToWatchList =(event,itemData)=>{
    event.stopPropagation();
    console.log("love clicked")
    dispatch(AddToWatchList(itemData));
  }

  return (
    <>
    {whatchListMovies.map((movie)=>(
            <div className="movie_card" id={movie.id}>
            <div className="info_section">
              <div className="movie_header">
                  <div style={{display:"flex",alignItems:"start",justifyContent:"start"}}>
                      <img width={"100px"} height={"125px"}src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                      <div style={{margin:"25px",textAlign:"start"}}>
                      <h1>{movie.title}</h1>
                      <Stars rating={movie.vote_average}/>
                      <h4>{movie.release_date},</h4>
                      <span className="minutes">120 min</span>
                      <p className="type">ali</p>
                      </div>
                  </div>
              </div>
              <div className="movie_desc">
                <p className="text text-start" >{movie.overview}</p>
              </div>
              <div className="movie_social" style={{width:"400px",alignItems:"end",display:"flex"}}>   
              <div className='d-flex position-absolute bottom-0 end-0 m-3'>
              <FontAwesomeIcon icon={faHeart} style={{ color: "#fbe352", fontSize: '2.5rem'  }} className='' onClick={(event) => handleAddToWatchList(event, movie)} />
              </div>
              </div>
            </div>
          </div>
    ))}
    </>
  );
};

export default MovieCard;
