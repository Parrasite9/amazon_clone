import React from 'react'
import '../CSS Files/Product.css'
import { useStateValue } from './StateProvider'

function Product({title, image, price, rating}) {

  const [state, dispatch] = useStateValue()

  console.log('This is the basket: ');

  const addToCart= () => {
    // ADD ITEM TO DATA LAYER 
    dispatch({
      type: "ADD_TO_CART",
      cart: {
        // id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className='product'>
        {/* PRODUCT DESCRIPTION & PRICE  */}
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>

        {/* PRODUCT RATING  */}
        <div className='product_rating'>
            {Array(rating).fill().map((_, i) =>(
                <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} />

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product