import React from 'react'

import './Navbar.css'
import rocket from '../../assets/rocket.png'
import star from '../../assets/glowingstar.png'
import idButton from '../../assets/idbutton.png'
import memo from '../../assets/memo.png'
import order from '../../assets/package.png'
import lock from "../../assets/locked.png"
import Linkwithicon from './Linkwithicon'


const Navbar = () => {
  return (
    <nav className='align_center navbar'>
        <div className='align_center align_center'>
            <h1 className="navbar_heading">CartWish</h1>
            <form className='align_center navbar_form' >
                <input type="text" className="navbar_search" placeholder='Search Products'/>
                <button type="submit" className='search_button' >Search</button>
            </form>
        </div>
        <div className='align_center navbar_links'>
          <Linkwithicon title="Home" link="/" emoji={rocket} />
          <Linkwithicon title="Products" link="/products" emoji={star} />
          <Linkwithicon title="Login" link="/login" emoji={idButton} />
          <Linkwithicon title="SignUp" link="/signup" emoji={memo} />
          <Linkwithicon title="My Orders" link="/myorders" emoji={order} />
          <Linkwithicon title="Logout" link="/logout" emoji={lock} />
          <a href="/cart" className='align_center'>
            Cart <p className='align_center cart_counts'>0</p>
          </a>
        </div>

    </nav>
  )
}

export default Navbar