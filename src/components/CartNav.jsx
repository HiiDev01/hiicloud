import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faCartShopping, faPlus} from '@fortawesome/free-solid-svg-icons';
import '../styles/CartNav.css';

const CartNav = () => {
  return (
    <div className='cartnav'>
      <div className="cartnavhd_con">
        <div className="cartnav_header">
          <p className='ctg'>
            <span><FontAwesomeIcon icon={faCartShopping} /></span>
            Categories
          </p>
          <button><FontAwesomeIcon icon={faAngleDown} /></button>
        </div>
        <ul className="storelist">
          <li><a href="#">Storage window vps</a></li>
          <li><a href="#">Window vps</a></li>
          <li><a href="#">Premium vps</a></li>
          <li><a href="#">MacOS</a></li>
          <li><a href="#">USA SSD KVM VPS</a></li>
          <li><a href="#">Canada SSD KVM VPS</a></li>
          <li><a href="#">Germany SSD KVM VPS</a></li>
        </ul>
      </div>

      <div className="cartnavhd_con">
        <div className="cartnav_header">
          <p className='ctg'>
            <span><FontAwesomeIcon icon={faPlus} /></span>
            action
          </p>
          <button><FontAwesomeIcon icon={faAngleDown} /></button>
        </div>
        <div className="vct">
          <a href="#">
            view cart
            <span><FontAwesomeIcon icon={faCartShopping} /></span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CartNav
