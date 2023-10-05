import React from 'react'
import  Movie_List from '../pages/Movie_List'
import  Movies_Search_Result  from '../pages/Movies_Search_Result'
import { Route ,Routes} from 'react-router-dom'
import WishList from '../pages/Wishlist'
import Movie_Details_page from '../pages/Movie_Details_page'


export default function Main_Router() {
  return (<>
          <Routes>
            <Route path='/' element={<Movie_List/>}/>
            <Route path='/movie-details/:id' element={<Movie_Details_page/>}/>
            <Route path='/search' element={<Movies_Search_Result/>}/>
            <Route path='/watch-list' element={<WishList/>}/>
          </Routes>
    </>
  )
}
