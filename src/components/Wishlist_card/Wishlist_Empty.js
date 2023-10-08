import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Empty from '../../shared/Empty';
import { LanguageContext } from '../../context/theme';

export default function Wishlist_Empty() {
  const {language}=useContext(LanguageContext)
  return (
    <Empty msg={language==="ar"?"لا يوجد لديك افلام في قائمة المفضلة":'No Movies in watch list'} />
  )
}
