import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Main_Card from '../../shared/Main_Card';
import { useParams } from 'react-router-dom';
import Search_Result_Empty from './Search_Result_Empty';

export default function Search_List() {
    const prams = useParams()
    const [items, setItems] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY; //apikey

    useEffect(() => {
      const PageURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${prams.title}`;
      axios.get(PageURL).then((res) => {
        setItems(res.data.results)
      }).catch((err) => {
        console.log(err);
      });
    }, [prams.title]);
    console.log(items)
  return (
    <div>
      {
        items == 0 ? <Search_Result_Empty /> 
        :
      
      <div className='my-5 text-start'>
        <h3 className='text-black fw-bold'>Search Result for {prams.title}</h3>
        {/* Cards */}
        <div className='d-flex flex-wrap justify-content-between'>
          <Main_Card items={items} />
        </div>
      </div>
      }
    </div>
  );
}