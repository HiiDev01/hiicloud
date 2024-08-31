import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <p>Copyright © 2024 HiCloud. All Rights Reserved.</p>
      <a href="#"><FontAwesomeIcon icon={faAngleUp} /></a>
    </div>
  )
}

export default Footer
