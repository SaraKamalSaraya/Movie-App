import './App.css';
import './components/Wishlist_card/Wishlist_Card.css'
import Wishlist_Empty from './components/Wishlist_card/Wishlist_Empty';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  console.log(baseUrl);
  console.log(apiKey);

// You can use apiKey and baseUrl in your code as needed.

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
