import React, { useEffect,useState } from 'react'
import axios from 'axios'

import Main_Card from '../../shared/card/Main_Card';
export default function All_Movies() {


  //this api call changer page 
  const API_KEY = process.env.REACT_APP_API_KEY; //apikey
  
  const[page,setPage] = useState(1);

  const[items,setItems] = useState([]);

  useEffect(()=>{
    const PageURL=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
    axios.get(PageURL).then((res)=>{
      setItems(res.data.results)
    }).catch((err)=>{
      console.log(err);
    });
  },[page]);

  
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1); 
    }
  };

  const handleNextPage = () => {
    setPage(page + 1); 
  };
  return (
    <div>
      <div className='my-5 text-start'>
        <h3 className='text-black fw-bold'>Popular Movies</h3>
        <button onClick={handlePreviousPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
        {/* Cards */}
        <div className='d-flex flex-wrap justify-content-between'>
          <Main_Card items={items} />
        </div>
      </div>
    </div>
  );
}