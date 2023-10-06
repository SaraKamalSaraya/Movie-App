import React from 'react'
import  Movie_List from '../pages/Movie_List'
import  Movies_Search_Result  from '../pages/Movies_Search_Result'
import { Route ,Routes} from 'react-router-dom'
import Movie_Details_page from '../pages/Movie_Details_page'
import WishList from '../pages/Wishlist'
import Not_Found from '../pages/Not_Found'


export default function Main_Router() {
  return (<>
          <Routes>
            <Route path='/' element={<Movie_List/>}/>
            <Route path='/movie-details/:id' element={<Movie_Details_page/>}/>
            <Route path='/search/:title' element={<Movies_Search_Result/>}/>
            <Route path='/watch-list' element={<WishList/>}/>
            <Route path='/*' element={<Not_Found />}/>
          </Routes>
    </>
  )
}
