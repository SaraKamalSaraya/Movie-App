import './App.css';
import Header from './components/Header/Header';
import './components/Wishlist_card/Wishlist_Card.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import Main_Router from './router/Main_Router';

function App() {
  console.log(process.env.REACT_APP_SEARCH_URL)
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Main_Router />
      </BrowserRouter>
    </div>
  );
}
export default App;
