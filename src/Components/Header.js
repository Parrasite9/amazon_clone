import React from 'react'
import '../CSS Files/Header.css'

// ==========================
//    MATERIAL UI ICONS
// ==========================

import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';

// ==========================
//    REACT ROUTER
// ==========================
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

  const [ {cart} , dispatch] = useStateValue()


  return (
    <div className='header'>
      
      <Link to='/'>
        <img src='https://i.imgur.com/p0c3KPX.png' className='header_logo' />
      </Link>

      {/* SEARCH BAR  */}
      <Link to='/'>

      </Link>
      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className='header_nav'>
        {/* SIGN IN */}
        <Link to='/login'>
          <div className='header_option'>
              <span className='header_optionLineOne'>Hello Guest</span>
              <span className='header_optionLineTwo'>Sign In</span>
          </div>
        </Link>


        {/* RETURNS & ORDERS */}
        <Link to='/returns'>
          <div className='header_option'>
              <span className='header_optionLineOne'>Returns</span>
              <span className='header_optionLineTwo'>& Orders</span>
          </div>
        </Link>


        {/* PRIME */}
        <Link to='/prime'>
          <div className='header_option'>
              <span className='header_optionLineOne'>Your</span>
              <span className='header_optionLineTwo'>Prime</span>
          </div>
        </Link>


        {/* CHECKOUT  */}
        <Link to='/checkout'>
          <div className='header_optionBasket'>
              <ShoppingBasket />
              <span className='header_toptionLineTwo header_basketCount'>{cart?.length}</span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Header
