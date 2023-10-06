import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import Empty from '../../shared/Empty';


export default function Search_Result_Empty() {
  const prams = useParams()
  return (
    <Empty msg={`No Movies With ${prams.title} title`} />
  )
}
