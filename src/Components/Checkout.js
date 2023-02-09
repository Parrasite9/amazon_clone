import React from 'react'
import '../CSS Files/Checkout.css'
import { useStateValue } from './StateProvider'

import SubTotal from './SubTotal.js'
import CheckoutProduct from './CheckoutProduct.js'

function Checkout() {

  const [{ cart }, dispatch] = useStateValue()

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src='https://i.imgur.com/mryRfK4.jpg' alt=''/>

            <div>
                <h2 className='checkout_title'>Your Shopping Cart</h2>

                {cart.map(item => (
                  <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                ))}
                {/* CHECKOUT PRODUCT  */}

                {/* CHECKOUT PRODUCT  */}

                {/* CHECKOUT PRODUCT  */}

                {/* CHECKOUT PRODUCT  */}

                {/* CHECKOUT PRODUCT  */}

                {/* CHECKOUT PRODUCT  */}

            </div>
        </div>

        <div className='checkout_right'>
            <SubTotal />


        </div>
    </div>
  )
}

export default Checkout
