import React from 'react';
import 'material-icons/iconfont/material-icons.css';


const MovieCard = ({ id, title, year, director, duration, genre, description, imageURL }) => {
  return (
    <div className="movie_card" id={id}>
      <div className="info_section">
        <div className="movie_header">
            <div style={{display:"flex",alignItems:"start",justifyContent:"start"}}>
                <img width={"100px"} height={"125px"}src={imageURL} alt={title} />
                <div style={{margin:"25px",textAlign:"start"}}>
                <h1>{title}</h1>
                <h4>{year}, {director}</h4>
                <span className="minutes">{duration} min</span>
                <p className="type">{genre}</p>
                </div>
            </div>
        </div>
        <div className="movie_desc">
          <p className="text text-start" >{description}</p>
        </div>
        <div className="movie_social" style={{width:"400px",alignItems:"end",display:"flex"}}>   
            <button className="icon-button" onClick={()=>{}}>
                <i className="material-icons" style={{ fontSize: "42px" }}>favorite</i>
            </button>
        </div>
      </div>
      <div className={`blur_back ${id}_back`}></div>
    </div>
  );
};

export default MovieCard;
