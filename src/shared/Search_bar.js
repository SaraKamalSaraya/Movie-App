import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Search_bar(props) {
  let { movieTitle }= props
  const navigate = useNavigate();

  const [ searchForm, setSearchForm] = useState({
    title: ''
  })
  const [searchFormError, setSearchFormError] = useState({
    title: null
  });

  const handleFormChange = (event) =>{
    let name = event.target.title
    let value = event.target.value
    setSearchForm({
      title: value
    });

    setSearchFormError({
      title: 
        value.trim(" ").length === 0
        ? "You Should Enter Movie Title"
        : value.trim(" ").length < 3
          ? "Your Movie Title More Than Or Equel 3 Charcter"
          : null
    });
  }

  const isFormValid = !searchFormError.title;
  
  const handleSearchButton = (event) => {
    if (searchForm.title != '' && isFormValid) {
      console.log("Search Successfully");
      navigate(`/search/${searchForm.title}`)
    } else {
      console.log("Form Has Errors");
    }
  };


  return (
    <>
    <div className="d-flex mb-3">
      <input type="text" className="form-control me-3" placeholder={movieTitle ? movieTitle : 'Search and explore....'} value={searchForm.title} onChange={handleFormChange} required/>
      <button className="btn btn-outline-secondary border-0 text-black px-4" style={{ backgroundColor: '#D48166', }} type="button" disabled={!isFormValid} onClick={handleSearchButton}>
        <span style={{color:'white'}}>Search</span></button>
    </div>
    {searchFormError.title && <div className="form-text text-danger text-start">{searchFormError.title}</div>}
    </>
  )
}
