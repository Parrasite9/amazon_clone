import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

// ==========================
//    COMPONENT IMPORTS 
// ==========================

import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import Login from './Components/Login'

// ==========================
//    MATERIAL UI ICONS
// ==========================

const App = () => {

  return (
    <>

      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path='/checkout' element={<Checkout />} />

        <Route path='/' element={<Home />} />

      </Routes>



      {/* <Router>
        <div className='app'>


            <Routes path='/'>
              <Header />
              <Home />
            </Routes> */}

            {/* <Route path='/checkout'>
              <Header />
              <h1>I AM A CHECKOUT PAGE</h1>
            </Route> */}

        {/* </div>
      </Router> */}
    </>
  )
}

export default App