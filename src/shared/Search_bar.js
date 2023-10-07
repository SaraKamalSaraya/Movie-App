import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Search_bar({movieTitle}) {
  
  const navigate = useNavigate();

  const [ searchForm, setSearchForm ] = useState('')
  const [ searchFormError, setSearchFormError ] = useState(false);

  const handleFormChange = (event) => {
    const value = event.target.value;
    setSearchForm(value);
  
    setSearchFormError(
      value.trim().length === 0
        ? "You should enter a movie title"
        : value.trim().length < 3
        ? "Your movie title should be at least 3 characters long"
        : null
    );
  };
  const isFormValid = !searchFormError;
  
  const handleSearchButton = () => {
    if (searchForm != '' && isFormValid) {
      console.log("Search Successfully");
      navigate(`/search/${searchForm}`)
    } else {
      console.log("Form Has Errors");
    }
  };
  return (
    <>
    <div className="d-flex mb-3">
      <input type="text" className="form-control me-3" placeholder={movieTitle ? movieTitle : 'Search and explore....'} value={searchForm} onChange={handleFormChange} required/>
      <button className="btn btn-outline-secondary border-0 text-black px-4" style={{ backgroundColor: '#D48166', }} type="button" disabled={!isFormValid} onClick={handleSearchButton}>
        <span style={{color:'white'}}>Search</span></button>
    </div>
    {searchFormError && <div className="form-text text-danger text-start">{searchFormError}</div>}
    </>
  )
}
