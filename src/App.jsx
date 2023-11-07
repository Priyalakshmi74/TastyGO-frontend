
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddToCart from './pages/AddToCart';
import CartItems from './pages/CartItems';
import Checkout from './pages/CheckOut';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}



export default App;
