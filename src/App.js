import './App.css';
import Header from './components/Header/Header';
import './components/Wishlist_card/Wishlist_Card.css'
import Wishlist_Empty from './components/Wishlist_card/Wishlist_Empty';
import 'bootstrap/dist/css/bootstrap.css';
import Movie_List from './pages/Movie_List';
import Progress_Bar from './components/Progress Bar/Progress_Bar';
import './components/Progress Bar/Progress_Bar.css'

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  console.log(baseUrl);
  console.log(apiKey);

// You can use apiKey and baseUrl in your code as needed.

  return (
    <div>
      <Header />
      <Movie_List />
      <Progress_Bar />
    </div>
  );
}

export default App;
