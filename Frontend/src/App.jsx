import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
       <Navbar setShowLogin = {setShowLogin}/>
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App
