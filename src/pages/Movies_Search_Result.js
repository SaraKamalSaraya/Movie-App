import React from 'react'
import Search_bar from '../shared/Search_bar'
import { useParams } from 'react-router-dom'
import Search_List from '../components/Search_List/Search_List'

export default function Movies_Search_Result() {
  const prams = useParams()
  return (
    <div style={{ padding: '2% 7%' }}>
      <Search_bar movieTitle={prams.title}/>
      <Search_List />
    </div>
  )
}
