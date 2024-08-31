import React, { useState } from 'react'
import logo from '../assests/images/bsheild.png';
import '../styles/ClientSideNav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars} from '@fortawesome/free-solid-svg-icons';

const ClientSide = () => {

  const [isAccount, setIsAccount] = useState(false);
  const [isStore, setIsStore] = useState(false);
  const [isMenuNav, setIsMenuNav] = useState(false);

  const toggleAccount =()=>{
    setIsAccount(!isAccount);
  }
  const toggleStore =()=>{
    setIsStore(!isStore);
  }
  const toggleNav = ()=>{
    setIsMenuNav(!isMenuNav);
  }



  return (
    <div className='ClientSide'>
      <div className="client_nav">
        <div className="logo">
          <h1>
            <span><img src={logo} alt="logo"/></span>
            HiiCloud
          </h1>
        </div>

        <div className="cl_link_con">
          <ul>
            <li><a href="#" className='cl_link'>English</a>
                <span><FontAwesomeIcon icon={faCaretDown} /></span>
            </li>
            <li><a href="#" className='cl_link'>Login</a></li>
            <li><Link to="/Billing" className='cl_link'>Register</Link></li>
            <li><Link to="/Cart" className='cl_cart_link'>Veiw Cart</Link></li>
          </ul>
        </div>

      </div>
      <div className="client_head_con">
        <div className={`cl_head_nav_wrapper ${isMenuNav ? 'active' : ''}`}>
            <div className="cl_head_nav">
            <ul className='cl_head_ul'>
              <li className='cl_head_li'><a href="#">Home</a></li>
              <li className='cl_head_li' onClick={toggleStore}>
                <a href="#">Store <span><FontAwesomeIcon icon={faCaretDown} /></span></a>
                {isStore &&(
                <ul className='cl_heade_db'>
                  <li><a href="#">Browse All</a></li>
                  <li><a href="#">Storage KVM Sale</a></li>
                  <li><a href="#">Window VPS</a></li>
                  <li><a href="#">Premuim VPS</a></li>
                  <li><a href="#">macOS VPS</a></li>
                </ul>
                )}
              </li>
              <li className='cl_head_li'><a href="#">Annoucements</a></li>
              <li className='cl_head_li'><a href="#">Knowledge</a></li>
              <li className='cl_head_li'><a href="#">Network status</a></li>
              <li className='cl_head_li'><a href="#">Affliates</a></li>
              <li className='cl_head_li'><a href="#">Contact Us</a></li>
            </ul>
            <div className="account">
              <li className='acct_drop_li' onClick={toggleAccount}>
                <a href="#" className='acct_drop_btn'>Account 
                  <span><FontAwesomeIcon icon={faCaretDown} /></span>
                </a>
              </li>
              {isAccount &&(
              <ul className="Account_ul">
                  <li><a href="#">Login</a></li>
                  <li><a href="#">Register</a></li>
                  <li><a href="#">Forget Password</a></li>
                </ul>
              )}
            </div>
          </div>
        </div>
        

        <div className="client_hamburger" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  )
}

export default ClientSide
