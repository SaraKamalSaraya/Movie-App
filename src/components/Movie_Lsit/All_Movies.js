import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Main_Card from '../../shared/Main_Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import './all_movies.css'


export default function All_Movies() {
  //this api call changer page 
  const API_KEY = process.env.REACT_APP_API_KEY; //apikey

  const [page, setPage] = useState(1);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const PageURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
    axios.get(PageURL).then((res) => {
      setItems(res.data.results)
    }).catch((err) => {
      console.log(err);
    });
  }, [page]);


  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
    handlePageNumber()
  };

  const handleNextPage = () => {
    setPage(page + 1);
    handlePageNumber()
  };

  let min = 0
  let max = 5
  const handlePageNumber = () => {
    while (true) {
      if (!(page > min && page <= max) ){
        min = min + 5
        max = max + 5
      }
      else {
        console.log(`${min}-${max}`)
        break
      }
    }
  }
  return (
    <div>
      <div className='my-5 text-start'>
        <h3 className='text-black fw-bold'>Popular Movies</h3>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <FontAwesomeIcon icon={faLessThan} className='arrow' onClick={handlePreviousPage} />
          <button className='allmoviesButton first' onClick={() => { setPage(page); handlePageNumber() }}>{page}</button>
          <button className='allmoviesButton' onClick={() => { setPage(page+1); handlePageNumber() }}>{page+1}</button>
          <button className='allmoviesButton' onClick={() => { setPage(page+2); handlePageNumber() }}>{page+2}</button>
          <button className='allmoviesButton' onClick={() => { setPage(page+3); handlePageNumber() }}>{page+3}</button>
          <button className='allmoviesButton' onClick={() => { setPage(page+4); handlePageNumber() }}>{page+4}</button>
          <p className='allmoviesButton dots'>...</p>
          <FontAwesomeIcon icon={faGreaterThan} className='arrow' onClick={handleNextPage} />
        </div>
        {/* Cards */}
        <div className='d-flex flex-wrap justify-content-between '>
          <Main_Card items={items} />
        </div>
      </div>
    </div>
  );
}