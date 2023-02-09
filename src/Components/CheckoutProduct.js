import React from 'react'
import '../CSS Files/Checkout.css'


function CheckoutProduct({id, image, title, price, rating}) {
  return (
    <div className='checkoutProduct'>
      {/* PRODUCT IMAGE  */}
      <img className='checkoutProduct_image' src={image} />

      {/* PRODUCT INFO  */}
      <div className='checkoutProduct_info'>
        {/* PRODUCT TITLE */}
        <p className='checkoutProduct_title'>{title}</p>
        {/* PRODUCT PRICE  */}
        <p className='checkoutProduct_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
      </div>

      {/* PRODUCT RATING  */}
      <div className='checkoutProduct_rating'>
        {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
        ))}
      </div>
      <button>Remove From Cart</button>
    </div>
  )
}

export default CheckoutProduct
