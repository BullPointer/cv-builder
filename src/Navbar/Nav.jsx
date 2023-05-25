// import { useState } from 'react';
import '../assets/navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // const [count, setCount] = useState(0)

  return (
    <nav>
        <div className='left'>
          <NavLink to='/' className='main-txt'>Resume Builder</NavLink>
        </div>
        <div className='right'>
          <NavLink 
          to='/build-resume' 
          className='btn'>
            Build your Resume
          </NavLink>
          <NavLink to='/login' className='btn'>Login</NavLink>
        </div>
    </nav>
  )
}

export default Navbar;
