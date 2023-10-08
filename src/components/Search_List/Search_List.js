import React, { useContext, useEffect, useState } from 'react'
import Main_Card from '../../shared/Main_Card';
import { useParams } from 'react-router-dom';
import Search_Result_Empty from './Search_Result_Empty';
import { LanguageContext } from '../../context/theme';
import { getSearch } from '../../api/searchConfig';
import { BackgroundTheme } from '../../context/theme'


export default function Search_List() {
  const { backgroundTheme } = useContext(BackgroundTheme)
  const prams = useParams()
  const [items, setItems] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    getSearch(prams.title, language)
      .then((res) => { setItems(res.data.results) })
      .catch((err) => { console.log(err) });
  }, [prams.title, language]);
  console.log(items)
  return (
    <div>
      {
        items == 0 ? <Search_Result_Empty />
          :
          <div className='my-5'>
            <h3 className='fw-bold' style={{ color: backgroundTheme ? 'black' : 'white' }}>{language === 'ar'? 'نتائج البحث عن ':'Search Result for '}{prams.title}</h3>
            {/* Cards */}
            <div className='d-flex flex-wrap justify-content-center'>
              <Main_Card items={items} />
            </div>
          </div>
      }
    </div>
  );
}