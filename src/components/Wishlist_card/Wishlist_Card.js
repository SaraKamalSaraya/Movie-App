import React from 'react';
import 'material-icons/iconfont/material-icons.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AddToWatchList } from '../../store/slices/watchList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Stars from '../../shared/Stars';
import Love_Icon from '../../shared/Love_Icon';



const MovieCard = () => {

  let whatchListMovies = useSelector(state => state.WatchListData.data);
  const dispatch = useDispatch();
  const handleAddToWatchList = (event, itemData) => {
    event.stopPropagation();
    console.log("love clicked")
    dispatch(AddToWatchList(itemData));
  }
console.log(whatchListMovies)
  return (
    <div className='d-flex flex-wrap justify-content-start align-items-start m-0'>
      {whatchListMovies.map((movie) => (
        <div className="movie_card" id={movie.id}>
          <div className="info_section mb-1">
            <div className="movie_header">
              <div style={{ display: "flex", alignItems: "start", justifyContent: "start" }}>
                <img className='my-3 ms-3' style={{ borderRadius: '5%' }} width={"63%"} height='370px' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <div style={{ marginLeft: "25px", textAlign: "start" }} className='d-flex flex-column justify-content-center'>
                  <h1 className='mt-4' style={{width: "60%"}}>{movie.title}</h1>
                  <Stars rating={movie.vote_average} />
                  <h5 className='mt-2'>Released at: {movie.release_date}</h5>
                  <div className="movie_desc mb-3" style={{width: "60%"}}>
                    <p className="text " >{movie.overview}</p>
                  </div>
                  <div className="movie_social" style={{ width: "400px", alignItems: "end", display: "flex" }}>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex position-absolute bottom-0 end-0 m-3'>
              <Love_Icon movie={movie}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
