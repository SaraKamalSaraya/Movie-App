import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Empty from '../shared/Empty';
import { LanguageContext } from '../context/theme';

export default function Not_Found() {
  const{language} = useContext(LanguageContext);
  return (
    <Empty msg={language==="ar"?"الصفحة غيرموجودة" :'Page Not Found!'}  />
  )
}
