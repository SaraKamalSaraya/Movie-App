import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import Empty from '../../shared/Empty';


export default function Search_Result_Empty() {
  const prams = useParams()
  return (
    <Empty msg={`No Movies With ${prams.title} title`} />
  )
}
