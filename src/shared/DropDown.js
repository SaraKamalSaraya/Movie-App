import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { LanguageContext } from '../context/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons'


function DropdownBTN() {
    const {language,setLanguage} = useContext(LanguageContext);
    
  return (
    <div className='px-3'>
    <Dropdown>
      <Dropdown.Toggle className='dropdown-toggle' style={{
          backgroundColor: "transparent",
          border: "none", // Remove the default border
          boxShadow: "none", // Remove the default box shadow
        }} id="dropdown-basic">
      <div style={{ color: "#000000" ,fontSize:"1.2em" }}><FontAwesomeIcon icon={faGlobe} className='mx-1' />{language}</div>
      </Dropdown.Toggle >
      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>setLanguage("ar")} >ARABIC</Dropdown.Item>
        <Dropdown.Item onClick={()=>setLanguage("en")} >ENGLISH</Dropdown.Item>
        <Dropdown.Item onClick={()=>setLanguage("fr")} >FRENCH</Dropdown.Item>
        <Dropdown.Item ></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default DropdownBTN;