// import { useState } from 'react';
import '../assets/home.css';
import homeImg from '../Images/homeImg.jpg';
import Navbar from '../Navbar/Nav';

function Home() {

  return (
    <>
    <Navbar />
    <div className='main-container'>
        <div className="main-left-box">
          <div className='main-msg'>BEST ONLINE RESUME BUILDER </div>
          <div className='main-msg'>
            Make a professional resume in minutes
          </div>
        </div>
        <div className="main-right-box">
          <img className='main-img' src={homeImg} alt="" />
        </div>
    </div>
    </>
  )
}

export default Home
