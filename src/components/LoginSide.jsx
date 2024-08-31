import React from 'react';
import '../styles/LoginSide.css';
import { Link } from 'react-router-dom';
import ClientSlideNav from '../components/ClientSideNav';
import Footer from './Footer';

const ClientSide = () => {
  return (
    <div className='c_wrapper'>
      <ClientSlideNav></ClientSlideNav>
      <div className="login_side_wrap">
        <div className="login_side_con">
          <div className="login_side_head">
            <h2>Login <span>This page is restricted</span></h2>
          </div>  
          <form action="">
            <div className="email_con">
              <label htmlFor="Email">Email Address</label>
              <input type="email" name="Email" id="Email_address" required/>
            </div>
  
            <div className="password_con">
              <label htmlFor="Password">Password</label>
              <input type="text" name="Password" id="Password" required/>
            </div>
  
            <div className="remember">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">remember me</label>
            </div>
  
            <div className="login_link">
              <button type="submit">Login</button>
              <Link to="/ForgetPassword">forget password</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ClientSide
