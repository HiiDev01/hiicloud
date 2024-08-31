import React, { useState, useEffect } from 'react';
import logo from '../assests/images/bsheild.png';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isActive, setIsActive] = useState();
  const toggleMenu = ()=>{
    setIsActive(!isActive);
  }

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 50){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={isScrolled ? 'nav scrolled' : 'nav'}>
      <div className="logo">
        <h1>
          <span><img src={logo} alt="logo"/></span>
          HiiCloud
        </h1>
      </div>
      <div className={`navlist ${isActive ? 'active' : ''}`}>
        <ul className='navlist_ul'>
          <li className='navlist_li'>
            <a href="javascript:void(0);" className='navlist_li_a'>Window VPS
              <span><FontAwesomeIcon icon={faCaretDown} /></span>
              <ul className='dropdown'>
                <li className='dropdown_li'><a href="#" className='dropdown_a'>Budget Window VPS</a></li>
                <li className='dropdown_li'><a href="#" className='dropdown_a'>SEO Optimized VPS</a></li>
                <li className='dropdown_li'><a href="#" className='dropdown_a'>Forex VPS</a></li>
                <li className='dropdown_li'><a href="#" className='dropdown_a'>High RAM VPS</a></li>
                <li className='dropdown_li'><a href="#" className='dropdown_a'>NvMe Windows VPS</a></li>
              </ul>
            </a>
          </li>

          <li className='navlist_li'>
            <Link href="#" className='navlist_li_a'>macOS VPS</Link>
          </li>
          <li className='navlist_li'>
            <a href="javascript:void(0);" className='navlist_li_a'>KVM VPS
              <span><FontAwesomeIcon icon={faCaretDown} /></span>
            <ul className='dropdown'>
                <li className='dropdown_li'><a href="#" className='dropdown_a'>EPYC NVMe KVM VDS</a></li>
                <li className='dropdown_li'><a href="#" className='dropdown_a'>Ryzen KVM VPS</a></li>
                <li className='dropdown_li'><a href="#" className='dropdown_a'>NVMe KVM VPS</a></li>
                <li className='dropdown_li'><a href="#" className='dropdown_a'>1Gbps SSD KVM VPS</a></li>
                <li className='dropdown_li'><a href="#" className='dropdown_a'>10Gbps KVM VPS</a></li>
              </ul>
            </a>
          </li>
          <li className='navlist_li'><Link href="#" className='navlist_li_a'>Dedicated servers</Link></li>
          <li className='navlist_li'><Link href="#" className='navlist_li_a'>Proxies</Link></li>
          <li className='navlist_li'><Link href="#" className='navlist_li_a'>Docs</Link></li>
        </ul>
        <div className="client">
          <Link to="/clientside">client area</Link>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isActive ? faTimes : faBars} className='ham_bars'/>
      </div>
    </div>
  )
}

export default Navbar
