import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { AddToWatchList } from '../store/slices/watchList';

export default function Love_Icon({movie}) {

    const watchListData = useSelector(state=>state.WatchListData.data)
    const isMovieInWatchlist = watchListData.some((item) => item.id === movie.id); // check if movie is in watch list or not 
    const dispatch = useDispatch();
    const handleAddToWatchList = (event, itemData) => {
        event.stopPropagation();
        console.log("love clicked")
        dispatch(AddToWatchList(itemData));
    }
    return (
        <div>
            <FontAwesomeIcon id={movie.id} icon={isMovieInWatchlist ? fullHeart :emptyHeart } style={{ color: "#D48166", fontSize: '2rem' }} className='icon-button' onClick={(event) => handleAddToWatchList(event, movie)} />
        </div>
    )
}
