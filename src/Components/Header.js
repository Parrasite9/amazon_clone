import React from 'react'
import '../CSS Files/Header.css'

// ==========================
//    MATERIAL UI ICONS
// ==========================

import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';

function Header() {
  return (
    <div className='header'>
      {/* UPDATE THIS IMAGE WHEN YOU GET A CHANCE  */}
      <img src='https://i.imgur.com/vMgT7hb.png' className='header_logo' />

      {/* SEARCH BAR  */}
      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className='header_nav'>
        {/* SIGN IN */}
        <div className='header_option'>
            <span className='header_optionLineOne'>Hello Guest</span>
            <span className='header_optionLineTwo'>Sign In</span>
        </div>

        {/* RETURNS & ORDERS */}
        <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
        </div>

        {/* PRIME */}
        <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span>
        </div>

        <div className='header_optionBasket'>
            <ShoppingBasket />
            <span className='header_toptionLineTwo header_basketCount'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header

// https://i.imgur.com/pnl9XZv.png
{/* <a href="https://imgur.com/pnl9XZv"><img src="" title="source: imgur.com" /></a> */}