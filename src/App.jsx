
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddToCart from './pages/AddToCart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
    </Router>
  );
}



export default App;
