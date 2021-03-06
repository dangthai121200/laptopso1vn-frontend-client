import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './component/NavBar/NavBar';
import { useSelector } from 'react-redux';
import PageLogin from './component/Page/PageLogin/PageLogin';
import PageRegister from './component/Page/PageRegister/PageRegister';
import Home from './pages/Home';
import Laptop from './pages/Laptop';
import Phukien from './pages/Phukien';
import Events from './pages/Events';
import ContactPage from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import AccountInfo from './pages/AccountInfo';
import AddFeedBack from './pages/AddFeedBack';
import PurchaseHistory from './pages/PurchaseHistory';
// import OrderDetail from './pages/OrderDetail';

const App = () => {
  const userInfo = useSelector(state=>state.User.userInfo)
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact path='/login' element={<PageLogin/>}/>
      <Route exact path='/register' element={<PageRegister/>}/>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Laptop' element={<Laptop/>}/>
      <Route exact path='/Accessory' element={<Phukien/>}/>
      <Route exact path='/Event' element={<Events/>}/>
      <Route exact path='/Contact' element={<ContactPage/>}/>
      <Route exact path='/Aboutus' element={<About/>}/>
      <Route exact path='/Cart' element={<Cart/>}/>
      <Route exact path='/AccountInfo' element={<AccountInfo/>}/>
      <Route exact path='/history' element={<PurchaseHistory/>}/>
      <Route exact path='/AddFeedBack' element={<AddFeedBack/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
