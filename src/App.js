import './App.css';
import Header from './components/Header/Header';
import './components/Wishlist_card/Wishlist_Card.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import Main_Router from './router/Main_Router';

function App() {
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
