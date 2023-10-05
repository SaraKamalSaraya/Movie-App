import React from 'react'
import Search_bar from '../components/Movie_Lsit/Search_bar'
import All_Movies from '../components/Movie_Lsit/All_Movies'


export default function Movie_List() {
  return (
    <div className="text-start" style={{ padding: '2% 7%' }}>
      <Search_bar/>
      <All_Movies/>
    </div>
  )
}
