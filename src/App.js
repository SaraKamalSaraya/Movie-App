import './App.css';
import './components/Wishlist_card/Wishlist_Card.css'
import 'bootstrap/dist/css/bootstrap.css';
import Movie_Details from './pages/Movie_Details'
import Movie_Details_page from './pages/Movie_Details';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  console.log(baseUrl);
  console.log(apiKey);

// You can use apiKey and baseUrl in your code as needed.

  return (
    <div >
    </div>
  );
}

export default App;
