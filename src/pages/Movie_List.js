import React from 'react'
import Search_bar from '../shared/Search_bar'
import All_Movies from '../components/Movie_Lsit/All_Movies'


export default function Movie_List() {
  return (
    <div className="text-start" style={{ padding: '2% 7%' }}>
      <div className='p-5' style={{ backgroundColor: '#f3f1f1' }}>
        <h3 className='text-black fw-bold mb-4'>Welcome to our movie app</h3>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <Search_bar/>
      </div>
      <All_Movies />
    </div>
  )
}
