import React from 'react';
import img1 from '../assests/images/powerup-homepage.png';
import flame from '../assests/images/fire.svg';
import windowicon from '../assests/images/Layer_1.png';
import kvmicon from '../assests/images/Layer_2.png';
import appleicon from '../assests/images/Layer_3.png';
import servericon from '../assests/images/Layer_4.png';
import workingicon from '../assests/images/working.svg';
import uptimeicon from '../assests/images/999.svg';
import locationicon from '../assests/images/location.svg';
import hardwareicon from '../assests/images/Frame.svg';
import logo from '../assests/images/bsheild.png';
import '../styles/Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='Home'>
      <section className='Home_det'>
        <div className="Home_head">
          <h1><span>Power Up </span>Your Business With HiiCloud</h1>
          <p>Affordable Windows VPS, Linux VPS and macOS VPS backed by Enterprise Hardware and Excellent 24/7 Customer Services.</p>
          <div className="home_img_con">
            <img src={img1} alt="img" className='home_img'/>
            <div className="flame">
              <img src={flame} alt="flame" />
            </div>
            <div className="flame_fluid"></div>
           {/*<div className="flame_shadow"></div>*/}
          </div>
        </div>
      </section>
      <section className='vp'>
        <div className="vp_type">
          <div className="vp_type_img_con">
           <img src={windowicon} alt="img" />
          </div>
          <h2>Window VPS</h2>
          <p><span>Powered by Hyper-V, </span>RDP enable by default,
            multiple location for you to choose, unmetered bandwidth
            @1 Gbps & 10 Gbps.
          </p>
        </div>
        <div className="vp_type">
          <div className="vp_type_img_con">
           <img src={kvmicon} alt="img" />
          </div>
          <h2>KVM VPS</h2>
          <p><span>Leading KVM Virtualization </span>
             -Blazing fast RAID-10 SSD, NVME & SATA running Linux on SolusVM
              with 1 Gbps & 10 Gbps port.
          </p>
        </div>
        <div className="vp_type">
          <div className="vp_type_img_con">
           <img src={appleicon} alt="img" />
          </div>
          <h2>MacOS VPS</h2>
          <p>High quality <span>macOS VPS</span> on
            latest mac pro Hardware powered by VMWare/ Parallels.
            macOS Monterey now available!.
          </p>
        </div>
        <div className="vp_type">
          <div className="vp_type_img_con">
           <img src={servericon} alt="img" />
          </div>
          <h2>Dedicated Server</h2>
          <p>Bare-metal dedicated server, <span>fully customizable</span> Virtualization ready. Ryzen and Intel Scalable avaliable in  multiple
            location depolyed within hours.
          </p>
        </div>
      </section>
      <section className='features_con'>
        <div className="feature_heading">
          <h1>Features</h1>
        </div>
        {/*<div className="feature_Control">
          <buton className='fc'>
            <FontAwesomeIcon icon={faAngleLeft} />
          </buton>
          <buton className='fc'>
            <FontAwesomeIcon icon={faAngleRight} />
          </buton>
        </div>*/}
        <div className="features_wrapper">
         <Slider {...settings}>
            <div className="features">
              <div className="features_details">
                <h2>Latest Hardware</h2>
                <p>
                   GreenCloud's infrastructure is proud to be built on latest
                   hardware, from EPYC Milian/Genoa and NVME 4.0 to offer customers
                   the best possible performance.
                </p>
              </div>
              <div className="features_img_con">
                <img src={workingicon} alt="image"/>
              </div>
            </div>
            <div className="features">
              <div className="features_details">
                <h2>Multiple Location</h2>
                <p>
                  3 continent, 30 locations, 32 datacenters, we area where our customers need us to be.
                </p>
              </div>
              <div className="features_img_con">
                <img src={locationicon} alt="image"/>
              </div>
            </div>
            <div className="features">
              <div className="features_details">
                <h2>24/7 In-House Support </h2>
                <p>
                  We have 24/7 Ticket support with avarage ticket response of 9 minutes.
                  We are always here to help you!
                </p>
              </div>
              <div className="features_img_con">
                <img src={hardwareicon} alt="image"/>
              </div>
            </div>
            <div className="features">
              <div className="features_details">
                <h2>99.9% Uptime</h2>
                <p>
                   GreenCloud has 99.99% network and power uptime on all virtual server and dedicated
                   servers proven by <a href="#">Uptime record</a>
                </p>
              </div>
              <div className="features_img_con">
                <img src={uptimeicon} alt="image"/>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className='Home_contact'>
        <div className="contact_det">
          <p>Need a custom solution? Would like to become a reseller? Need more information?</p>
          <h2>Talk to our sales experts!</h2>
        </div>
        <div className="contact_det">
          <a href='#'>Contact US</a>
        </div>
      </section>
      <section className='landing_footer'>
        <div className="foot_head">
          <div className="foot_logo">
            <h1>
              <span><img src={logo} alt="logo"/></span>
              HiiCloud
            </h1>
          </div>
          <p>
            123 Group LLC
            Address: 101010 admin Highway, victoria island, lagos Island
          </p>
          <div className="social">
            <a href="#"><FontAwesomeIcon icon={faFacebook} className='socialicon'/></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className='socialicon'/></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} className='socialicon'/></a>
          </div>
        </div>
        <div className="foot_body">
          <ul>
            <li><a href="#">Privacy Policy </a></li>
            <li><a href="#">Terms of Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Datacenters</a></li>
            <li><a href="#">Network Status</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
          <p>© Copyright 2013-2024 HiiCloud | All Rights Reserved</p>
        </div>
      </section>
    </div>
  )
}

export default Home
