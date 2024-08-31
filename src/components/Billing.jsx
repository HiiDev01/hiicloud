import React from 'react';
import '../styles/Billing.css';
import ClientSideNav from './ClientSideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faUser} from '@fortawesome/free-solid-svg-icons';
import BillingForm from './BillingForm';

const Billing = () => {
  return (
    <div className='Billing'>
      <ClientSideNav></ClientSideNav>
      <div className="Billing_wrap">
        <div className="billing_side">
          <p className='bx1'>Already registered?</p>
          <p className='bx2'>
             Already registered with us? If so, click the 
             button below to login to our client area from 
             where you can manage your account.
          </p>
          <a href="#" className='bx3'>Login <span><FontAwesomeIcon icon={faUser} /></span></a>
          <a href="#" className='bx4'>Lost password reset <span></span></a>
        </div>

        <div className="billing_main">
          <div className="billing_main_hd">
            <h2>Register <span>Create an account with us . . .</span></h2>
          </div>
          <div className="billing_link_con">
            <a href="#" className='bill_lk1'>Portal Home</a> /
            <a href="#" className='bill_lk2'>Register</a>
          </div>
          <BillingForm></BillingForm>
        </div>
      </div>
    </div>
  )
}

export default Billing
