import React from 'react'
import Search_bar from '../shared/Search_bar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Search_List from '../components/Search_List/Search_List'
import Search_Result_Empty from '../components/Search_List/Search_Result_Empty'

export default function Movies_Search_Result() {
  const prams = useParams()
  const [items, setItems] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY; //apikey
  useEffect(() => {
    const PageURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&query=${prams.title}`;
    axios.get(PageURL).then((res) => {
      setItems(res.data.results)
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  console.log('ttttt'+items)
  return (
    <div style={{ padding: '2% 7%' }}>
      <Search_bar movieTitle={prams.title}/>
      <Search_List />
      
    </div>
  )
}
