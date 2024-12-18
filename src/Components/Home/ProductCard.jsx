import React from 'react'

import iphone from '../../assets/iphone.jpg'
import star from '../../assets/glowingstar.png'
import basket from '../../assets/basket.png'
import './ProductCard.css'

const ProductCard = () => {
  return (
        <article className="product_card">
        <div className="product_image">
          <a href="products/1"><img src={ iphone } alt="product_image" /></a>
        </div>
        <div className="product_details">
          <h3 className="product_price">$999</h3>
          <p className="product_title">iPhone 14 PRO</p>

          <footer className="align_Center product_info_footer">
            <div className="align_center">
            <p className="align_center product_rating">
              <img src={ star } alt="star" /> 5.0
            </p>
            <p className='product_review_count'>120</p>
            </div>

            <button className="add_to_cart">
              <img src={ basket } alt="basket button" />
            </button>
          </footer>
        </div>
        </article>
  )
}

export default ProductCard