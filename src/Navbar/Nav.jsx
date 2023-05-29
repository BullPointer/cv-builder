// import { useState } from 'react';
import '../assets/navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // const [count, setCount] = useState(0)

  return (
    <nav>
        <div className='left'>
          <NavLink to='/cv-builder' className='main-txt'>Resume Builder</NavLink>
        </div>
        <div className='right'>
          <NavLink 
          to='/cv-builder/build-resume' 
          className='btn'>
            Build your Resume
          </NavLink>
          <NavLink to='/cv-builder/login' className='btn'>Login</NavLink>
        </div>
    </nav>
  )
}

export default Navbar;
