import React from 'react'
import '../CSS Files/Checkout.css'

import SubTotal from './SubTotal.js'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src='https://i.imgur.com/mryRfK4.jpg' alt=''/>

            <div>
                <h2 className='checkout_title'>Your Shopping Cart</h2>

                <h2>The Subtotal will go here</h2>

                {/* CART ITEM  */}
                {/* CART ITEM  */}
                {/* CART ITEM  */}
                {/* CART ITEM  */}
                {/* CART ITEM  */}
                {/* CART ITEM  */}
            </div>
        </div>

        <div className='checkout_right'>
            <SubTotal />


        </div>
    </div>
  )
}

export default Checkout
