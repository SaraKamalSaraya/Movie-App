import './all_movies.css'
import React, { useContext, useEffect, useState } from 'react'
import Main_Card from '../../shared/Main_Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../../context/theme';
import { getMovies } from '../../api/movieConfig';
import { BackgroundTheme } from '../../context/theme';


export default function All_Movies() {
  const {backgroundTheme} = useContext(BackgroundTheme)
  const {language,setLanguage} = useContext(LanguageContext);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getMovies(page,language)
    .then((res) => { setItems(res.data.results) })
    .catch((err) => { console.log(err) });
  }, [page,language]);


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
        <h3 className='fw-bold' style={{ color: backgroundTheme ? 'black' : 'white' }}>Popular Movies</h3>
        <div className='d-flex align-items-center justify-content-center mb-3' >
          <FontAwesomeIcon icon={faLessThan} className='arrow' style={{ color: backgroundTheme ? 'black' : 'white' }} onClick={handlePreviousPage} />
          <button className='allmoviesButton first' onClick={() => { setPage(page); handlePageNumber() }}>{page}</button>
          <button className='allmoviesButton' style={{ color: backgroundTheme ? 'black' : 'white' }} onClick={() => { setPage(page+1); handlePageNumber() }}>{page+1}</button>
          <button className='allmoviesButton' style={{ color: backgroundTheme ? 'black' : 'white' }} onClick={() => { setPage(page+2); handlePageNumber() }}>{page+2}</button>
          <button className='allmoviesButton' style={{ color: backgroundTheme ? 'black' : 'white' }} onClick={() => { setPage(page+3); handlePageNumber() }}>{page+3}</button>
          <button className='allmoviesButton' style={{ color: backgroundTheme ? 'black' : 'white' }} onClick={() => { setPage(page+4); handlePageNumber() }}>{page+4}</button>
          <p className='allmoviesButton dots'>...</p>
          <FontAwesomeIcon icon={faGreaterThan} className='arrow' style={{ color: backgroundTheme ? 'black' : 'white' }} onClick={handleNextPage} />
        </div>
        {/* Cards */}
        <div className='cards d-flex flex-wrap justify-content-center '>
          <Main_Card items={items} />
        </div>
      </div>
    </div>
  );
}