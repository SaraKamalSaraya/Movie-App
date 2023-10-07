import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main_Card from '../../shared/Main_Card';
import {BackgroundTheme, LanguageContext} from '../../context/theme'
import { getRecomendedMovies } from '../../api/rocomendedConfig';

export default function Recommendations() {
    const prams = useParams()
    const [items, setItems] = useState([])
    const {language} = useContext(LanguageContext);
    const {backgroundTheme} = useContext(BackgroundTheme);

    useEffect(() => {
      getRecomendedMovies(prams.id,language)
          .then((res) => {
            setItems(res.data.results)
          })
          .catch((err) => console.log(err))
      }, [items,language])
    return (
      <>
      <h2 className= {`${backgroundTheme?"text-black":"text-white"} fw-bold mb-4`}>Recommendations</h2>
        <div className='d-flex flex-wrap justify-content-center '>
          <Main_Card items={items}/>
        </div>
        </>
    )
}
