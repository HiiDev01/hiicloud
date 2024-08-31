import React, { useState } from 'react';
import '../styles/BillingForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope,faPhone,faLocationDot, faBuilding, faCertificate, faSignsPost, faGlobe, faLock, faExclamation, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const BillingForm = () => {

  return (
    <div className='BillingForm_con'>
      <form action="">
        <div className="personal_info">
          <h2 className="billing_head_title">
            Personal Infomation
          </h2>
          <div className="billing_name_con">
            <div className="First_name Names">
              <label for="firstName"><FontAwesomeIcon icon={faUser} /></label>
              <input type="text" name="firstName" id="firstName" placeholder='First Name'/>
            </div>

            <div className="Last_name Names">
              <label for="lastName"><FontAwesomeIcon icon={faUser} /></label>
              <input type="text" name="lastName" id="lastName" placeholder='Last Name'/>
            </div>
          </div>

          <div className="billing_name_con">
            <div className="First_name Names">
              <label for="BillingEmail"><FontAwesomeIcon icon={faEnvelope} /></label>
              <input type="email" name="BillingEmail" id="BillingEmail" placeholder='Email Address'/>
            </div>

            <div className="Last_name Names">
              <label for="BillingEmail"><FontAwesomeIcon icon={faPhone} /></label>
              <input 
              type='telephone' 
              id="Usertelephone" 
              placeholder='Phone Number'
              />
            </div>

          </div>

        </div>

        <div className="personal_info">
          <h2 className="billing_head_title">
            Billing Address
          </h2>
          <div className="street_con">
            <span><FontAwesomeIcon icon={faLocationDot}/></span>
            <input type="text" name="address" id="address" className='AddressInput'  placeholder='Street Address'/>
          </div>
          <div className="place_con">
            <div className="city place">
              <span><FontAwesomeIcon icon={faBuilding}/></span>
              <input type="text" placeholder='City' />
            </div>
            <div className="state place">
              <span><FontAwesomeIcon icon={faSignsPost}/></span>
              <select name="State" id="State">
                <option value="">Texas</option>
                <option value="">Michigan</option>
                <option value="">California</option>
                <option value="">New York</option>
              </select>
            </div>
            <div className="postal_code place">
              <span><FontAwesomeIcon icon={faCertificate} /></span>
              <input type="text" placeholder='Postcode' />
            </div>
          </div>
          <div className="country">
            <span><FontAwesomeIcon icon={faGlobe} /></span>
            <select name="country" id="country">
              <option value="USA">United State of America</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="MA">Malaysia</option>
            </select>
          </div>

        </div>

        <div className="personal_info">
          <h2 className="billing_head_title">
            Account Security
          </h2>
          <div className="acct_password">
            <div className="create_password acctpassword">
              <span><FontAwesomeIcon icon={faLock} /></span>
              <input type="password" name="acct_password" id="acct_password"  placeholder='Password'/>
            </div>

            <div className="confirm_password acctpassword">
              <span><FontAwesomeIcon icon={faLock} /></span>
              <input type="password" name="confirm_password" id="confirm_password" placeholder='Confirm Password'/>
            </div>
          </div>

        </div>
        <div className="term_condition">
          <div className="term">
            <span><FontAwesomeIcon icon={faExclamationTriangle} /></span>
            <p> Terms of Service</p>
          </div>
          <div className="condition">
            <span><input type="checkbox" name="agreedterm" id="agreedterm" /></span>
            <p>I have read and agree to the <a href="#">Terms and Condition</a></p>
          </div>
        </div>

        <div className="register_con">
          <input type="submit" value="register" />
        </div>

      </form>
    </div>
  )
}

export default BillingForm
