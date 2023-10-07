import React from 'react'
import { useParams } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { useState, useEffect } from 'react';
import Main_Card from '../../shared/Main_Card';

export default function Recommendations() {
    const API_KEY = process.env.REACT_APP_API_KEY; //apikey
    const prams = useParams()
    const [items, setItems] = useState([])
    useEffect(() => {
        axios
          .get(`https://api.themoviedb.org/3/movie/${prams.id}/recommendations?api_key=${API_KEY}`)
          .then((res) => {
            setItems(res.data.results)
          })
          .catch((err) => console.log(err))
      }, [items])

    return (
        <div className='d-flex flex-wrap justify-content-between '>
          <Main_Card items={items}/>
        </div>
    )
}
