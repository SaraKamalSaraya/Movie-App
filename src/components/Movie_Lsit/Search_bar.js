import React from 'react'

export default function Search_bar() {
  return (
    <div >
    <div className='p-5' style={{ backgroundColor: '#f3f1f1' }}>
      <h3 className='text-black fw-bold mb-4'>Welcome to our movie app</h3>
      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      <div className="d-flex mb-3">
        <input type="text" className="form-control me-3 border-0" placeholder="Search and explore...." />
        <button className="btn btn-outline-secondary border-0 text-black px-4" style={{ backgroundColor: '#fbe352' }} type="button">Search</button>
      </div>
    </div>
  </div>
  )
}
