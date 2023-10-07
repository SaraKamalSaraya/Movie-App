import React, { useContext, useEffect, useState } from 'react'
import Main_Card from '../../shared/Main_Card';
import { useParams } from 'react-router-dom';
import Search_Result_Empty from './Search_Result_Empty';
import { axiosInstance } from '../../api/config';
import { LanguageContext } from '../../context/theme';

export default function Search_List() {
    const prams = useParams()
    const [items, setItems] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY; //apikey
    const {language,setLanguage} = useContext(LanguageContext);

    useEffect(() => {
      axiosInstance
      .get(`/search/movie?api_key=${API_KEY}&query=${prams.title}&language=${language}`)
      .then((res) => { setItems(res.data.results) })
      .catch((err) => { console.log(err) });
    }, [prams.title,language]);
    console.log(items)
  return (
    <div>
      {
        items == 0 ? <Search_Result_Empty /> 
        :
      <div className='my-5 text-start'>
        <h3 className='text-black fw-bold'>Search Result for {prams.title}</h3>
        {/* Cards */}
        <div className='d-flex flex-wrap justify-content-center'>
          <Main_Card items={items} />
        </div>
      </div>
      }
    </div>
  );
}