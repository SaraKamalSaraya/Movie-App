import React, { useContext } from 'react'
import Search_bar from '../shared/Search_bar'
import All_Movies from '../components/Movie_Lsit/All_Movies'
import { BackgroundTheme } from '../context/theme'


export default function Movie_List() {
  const {backgroundTheme} = useContext(BackgroundTheme)
  return (
    <div className="text-start" style={{ padding: '2% 7%', color: backgroundTheme ? 'black' : 'white'  }}>
      <div className='p-5' style={{ backgroundColor: backgroundTheme ? '#E6E2DD': 'grey'  }}>
        <h3 className='fw-bold mb-4' style={{ color: backgroundTheme ? 'black' : 'white' }}>Welcome to our movie app</h3>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <Search_bar/>
      </div>
      <All_Movies />
    </div>
  )
}
