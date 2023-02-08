import { useState, useEffect } from 'react'

// ==========================
//    COMPONENT IMPORTS 
// ==========================

import Header from './Components/Header'
import Home from './Components/Home'

// ==========================
//    MATERIAL UI ICONS
// ==========================

const App = () => {

  return (
    <>
      <div className='app'>
        <Header />
        <Home />

      </div>
    </>
  )
}

export default App