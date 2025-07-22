import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LikeProvider } from "./Context/LikeContext";
import HomePage from './Pages/HomePage'
import Shop from './Pages/Shop'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import Cart from './Pages/Cart'
import LoginPage from './Pages/LoginPage'
import NewArrivalsPage from './Pages/NewArrivalsPage'
import TopBar from './Components/TopBar'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { CartProvider } from "./Context/CartContext";
import Checkout from './Pages/Checkout'
import CartPopup from './Components/CartPopup'
import Liked from './Pages/Liked'
import Sale from './Pages/Sale';
import Brands from './Pages/Brands';

const App = () => {
  return (
    <LikeProvider>
      <CartProvider>
        <BrowserRouter>
          <TopBar />
          <Navbar />
          <CartPopup />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/productdetails/:id' element={<ProductDetailsPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/newarrivals' element={<NewArrivalsPage />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/like' element={<Liked />} />
            <Route path='/sale' element={<Sale/>} />
            {/* <Route path='/brands' element={<Brands />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </LikeProvider>
  );
};

export default App;