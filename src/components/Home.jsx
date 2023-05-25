// import { useState } from 'react';
import '../assets/home.css';
import homeImg from '../Images/homeImg.jpg';
import Navbar from '../Navbar/Nav';

function Home() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
    <div className='container'>
        <div className="left-box">
          <div className='msg'>BEST ONLINE RESUME BUILDER </div>
          <div className='msg'>
            Make a professional resume in minutes
          </div>
        </div>
        <div className="right-box">
          <img className='img' src={homeImg} alt="" />
        </div>
    </div>
    </>
  )
}

export default Home
