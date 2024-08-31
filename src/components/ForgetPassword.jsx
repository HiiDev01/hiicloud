import React from 'react';
import ClientSideNav from './ClientSideNav';
import '../styles/ForgetPassword.css';


const ForgetPassword = () => {
  return (
    <div className='ForgetPassword'>
      <ClientSideNav></ClientSideNav>
      <div className="forget_ps_wrap">
        <div className="forget_ps_box">
          <div className="forget_ps_head">
            <h2>Lost Password Reset</h2>
          </div>
          <p>Forgotten your password? Enter your email address below to begin the reset process.</p>
          <form action="">
            <div className="email_con">
              <label htmlFor="Email">Email Address</label>
              <input type="email" name="Email" id="Email_address" required/>
            </div>

            <div className="login_link">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
