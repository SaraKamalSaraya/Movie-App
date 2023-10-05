import './App.css';
import Header from './components/Header/Header';
import './components/Wishlist_card/Wishlist_Card.css'
import 'bootstrap/dist/css/bootstrap.css';
import Movie_List from './pages/Movie_List';
import './shared/Progress Bar/Progress_Bar.css'
import { BrowserRouter } from 'react-router-dom';
import Main_Router from './router/Main_Router';

function App() {
  
  return (
    <div>
    <Header />
    <BrowserRouter>
      <Main_Router>
      </Main_Router>
    </BrowserRouter>
    </div>
  );
}

export default App;
