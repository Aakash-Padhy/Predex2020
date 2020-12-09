import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './mainLogo.png'
import './Home.css';
import Navbar from'../NavBar/Navbar'
const Home= () =>{
  return (
    <>
    <Navbar/>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
              <div className="row">
                  <div className='col-10 mx-auto'>
                    <div className='row '>
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>Join us at <strong className="textprimary">PreDx </strong></h1>
                        <h2>We are a Team of Developers from NIT Rourkela bringing you HealthCare at its best.</h2>
                        <div className="mt-3">
                            <NavLink to="/login" className="btn btn-started">Get Started</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img src={logo} className="img-fluid animated" alt="alternate"/>
                    </div>
                  </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
export default Home;