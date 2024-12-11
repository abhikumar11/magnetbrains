import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Home from './components/Home';
import { PaymentSuccess } from './components/PaymentSuccess';
import StripePayment from './components/StripePayment';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Home/>}>
      </Route>
      <Route path='/cart'element={<Cart/>}>
      </Route>
      <Route path="payment" element={<StripePayment />} />
      <Route path="success" element={<PaymentSuccess />} />
      <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </div>
  );
}

export default App;
