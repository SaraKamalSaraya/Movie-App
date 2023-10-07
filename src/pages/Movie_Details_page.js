import React from 'react'
import Movie_Details from '../components/Movie_Details/Movie_Details'
import Recommendations from '../components/Recomndations/Recommendations'

export default function Movie_Details_page() {
  return (
    <div className='' style={{ padding: '2% 7%' }}>
      
      <Movie_Details />
      
      <Recommendations />
    </div>
  )
}
