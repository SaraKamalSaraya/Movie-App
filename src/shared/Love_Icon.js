import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux';
import { AddToWatchList } from '../store/slices/watchList';

export default function Love_Icon(props) {
    const movie = props
    const dispatch = useDispatch();
    const handleAddToWatchList = (event, itemData) => {
        event.stopPropagation();
        console.log("love clicked")
        dispatch(AddToWatchList(itemData));
    }
    return (
        <div>
            {/* <FontAwesomeIcon icon={emptyHeart} style={{ color: "#fbe352", fontSize: '2rem' }} className='icon-button' onClick={(event) => handleAddToWatchList(event, movie)} /> */}
            <FontAwesomeIcon icon={fullHeart} style={{ color: "#fbe352", fontSize: '2rem' }} className='icon-button' onClick={(event) => handleAddToWatchList(event, movie)} />
        </div>
    )
}
