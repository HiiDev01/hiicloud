import React from 'react';
import '../styles/Cart.css';
import CartNav from './CartNav';
import ClientSide from './ClientSideNav';


const Cart = () => {
  return (
    <div className='cart'>
      <ClientSide></ClientSide>
      <div className="cart_con">
        <div className="cart_nav_con">
          <CartNav></CartNav>
        </div>
        <div className="cart_main_con"></div>
      </div>
    </div>
  )
}

export default Cart
