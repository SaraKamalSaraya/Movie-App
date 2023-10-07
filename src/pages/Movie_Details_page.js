import React from 'react'
import Movie_Details from '../components/Movie_Details/Movie_Details'
import Recommendations from '../components/Recomndations/Recommendations'

export default function Movie_Details_page() {
  return (
    <div className='' style={{ padding: '2% 7%' }}>
      <h2 className='text-black fw-bold mb-4'>Movie Details</h2>
      <Movie_Details />
      <h2 className='text-black fw-bold mb-4'>Recommendations</h2>
      <Recommendations />
    </div>
  )
}
