import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Stars from '../../shared/Stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Love_Icon from '../../shared/Love_Icon';
import NoImgFound from '../../shared/NoImgFound';
import {BackgroundTheme, LanguageContext}  from '../../context/theme'
import { getMoviesDetails } from '../../api/movieDetailsConfig';


function Movie_Details() {
  const {language} = useContext(LanguageContext);
  const {backgroundTheme} = useContext(BackgroundTheme);
  console.log(language)
  const prams = useParams()
  const [movie, setMovie] = useState([])
  const [genres, setGenres] = useState([])
  const [company, setCompany] = useState([])
  const [languages, setLanguages] = useState([])
  useEffect(() => {
    getMoviesDetails(prams.id,language)
      .then((res) => {
        setMovie(res.data)
        setGenres(res.data.genres)
        setCompany(res.data.production_companies)
        setLanguages(res.data.spoken_languages)
      })
      .catch((err) => console.log(err))
  }, [prams.id,language])

  return (
    <div className=''>
      <div className='row' style={{ justifyContent: "space-between" }}>
      <h2 className={`${backgroundTheme?"text-black":"text-white"} fw-bold mb-4`}>{language === "ar"? "تفاصيل الفيلم":"Movie Details"}</h2>
      <div className='col-lg-3 col-md-4 col-sm-6' style={{ height: "65vh" }}>
            {/* IMG */}
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                style={{ width: "100%", height: "100%", borderRadius: "27px" }}
                alt={movie.title}
              />
            ) : (
              <NoImgFound title={movie.title}/>
            )}
          </div>
        <div className='col-lg-9 col-md-8 col-sm-6'>
          <div style={{ height: "100%", width: "100%" }}>
            {/* Title */}
            <div className='d-flex justify-content-between align-items-center'>
            <h2 className={`${backgroundTheme?"text-black":"text-white"} fw-bold mb-0`}>{movie.title}</h2>
            <Love_Icon movie={movie}/>
            </div>
            {/* Release Date */}
            <p className={`${backgroundTheme?"text-black":"text-white"} mt-0`} style={{ fontSize: '10px' }}>{movie.release_date}</p>
            <div className=''>
              {/* Stars */}
              <div className='d-flex align-items-top'>
                <Stars rating={movie.vote_average} />
                <p className={`${backgroundTheme?"text-black":"text-white"} ms-2 fw-semibold`} style={{ fontSize: '12px' }}>{movie.vote_count}</p>
              </div>
              {/* Describtion */}
              <p className={`${backgroundTheme?"text-black":"text-white"}`}>{movie.overview}</p>
              <div className='category row mb-3'>
                {/* Geners */}
                {
                  genres.map((genres) => {
                    return <button disabled className='btn mx-2 col-2' style={{ opacity: '100%', backgroundColor:'#D48166', color:'white' }}>{genres.name}</button>
                  })
                }
              </div>
              {/* Duration */}
              <div className= {`${backgroundTheme?"text-black":"text-white"} d-flex mb-3`}>
                <p className= 'me-5'>
                <span className=  'fw-semibold' >{language === "ar"? " المدة: ":"Duration: "} </span>{movie.runtime} {language === "ar"? " دقيقة ":"Min. "} </p>
                <span className= 'fw-semibold mx-1' >{language === "ar"? " اللغات: ":"languages:"} </span>
                {
                  languages.map((language) => {
                    return <p className={`${backgroundTheme?"text-black":"text-white"} me-1`} >{language.english_name}</p>
                  })
                }
              </div>
              <div className="d-flex justify-content-evenly mb-3 stdio-img me-4" style={{ height: "50px", width: "210px" }}>
                {
                  company.map((company) => {
                    return (
                      <div >
                        { company.logo_path &&
                          <img key={company.id} src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} style={{ height: "100%", width: "100%", padding:"2px" }} />
                        }
                      </div>
                    )
                  })
                }
              </div>
              
              <button className={`${backgroundTheme?"text-black":"text-white"} btn text-black p-2 px-4`} style={{ borderColor: '#D48166', borderRadius: '20px' }} onClick={() => window.open(`${movie.homepage}`, "_blank", 'noopener,noreferrer')}>
                View website
                <FontAwesomeIcon className='ms-2' icon={faLink} style={{ "--fa-primary-color": "#000000", "--fa-secondary-color": "#f9ca2b", "--fa-secondary-opacity": "0.5", }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ margin: "32px", border: "1px solid #D48166" }} />
    </div>
  )
}

export default Movie_Details;