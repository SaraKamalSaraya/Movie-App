import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main_Card from '../../shared/Main_Card';
import {LanguageContext} from '../../context/theme'
import { getRecomendedMovies } from '../../api/rocomendedConfig';

export default function Recommendations() {
    const API_KEY = process.env.REACT_APP_API_KEY; //apikey
    const prams = useParams()
    const [items, setItems] = useState([])
    const {language,setLanguage} = useContext(LanguageContext);
    useEffect(() => {
      getRecomendedMovies(prams.id,language)
          .then((res) => {
            setItems(res.data.results)
          })
          .catch((err) => console.log(err))
      }, [items,language])
    return (
        <div className='d-flex flex-wrap justify-content-center '>
          <Main_Card items={items}/>
        </div>
    )
}
