import './App.css';
import Header from './components/Header/Header';
import './components/Wishlist_card/Wishlist_Card.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import Main_Router from './router/Main_Router';
import { useState } from 'react';
import { BackgroundTheme , LanguageContext } from './context/theme';


function App() {
  const [backgroundTheme,setBackgroundTheme] = useState(true);
  const [language,setLanguage] = useState("en");
  return (
    <div >
      <BrowserRouter>
        <BackgroundTheme.Provider value={{backgroundTheme,setBackgroundTheme}}>
          <LanguageContext.Provider value={{language,setLanguage}}>
          <div style={{backgroundColor: backgroundTheme? "white" :"#333" ,direction:language === "en"?"ltr":language === "ar"?"rtl":"ltr"}}> 
            <Header />
            <Main_Router />
          </div>
          </LanguageContext.Provider>
        </BackgroundTheme.Provider>
      </BrowserRouter>
      
    </div>
  );
}
export default App;