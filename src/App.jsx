
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddToCart from './pages/AddToCart';
import CartItems from './pages/CartItems';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/cart" element={<CartItems />} />
      </Routes>
    </Router>
  );
}



export default App;
