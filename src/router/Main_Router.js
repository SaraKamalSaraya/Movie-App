import React, { Suspense , useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
const Movie_List = React.lazy(()=>import('../pages/Movie_List'))
const Movies_Search_Result = React.lazy(()=>import('../pages/Movies_Search_Result'))
const Movie_Details_page = React.lazy(()=>import('../pages/Movie_Details_page'))
const Not_Found = React.lazy(()=>import('../pages/Not_Found'))
const WishList = React.lazy(()=>import('../pages/WishList'))

export default function Main_Router() {
  const [backgroundTheme, setBackgroundTheme] = useState(true);
  return (
    <Suspense fallback={<Loader />}>
      
          <Routes>
            <Route path='/' element={<Movie_List />} />
            <Route path='/movie-details/:id' element={<Movie_Details_page />} />
            <Route path='/search/:title' element={<Movies_Search_Result />} />
            <Route path='/watch-list' element={<WishList />} />
            <Route path='/*' element={<Not_Found />} />
          </Routes>
    </Suspense>
  )
}
