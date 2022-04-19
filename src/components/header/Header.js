import {
  Link
} from 'react-router-dom';
import React, { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if(isOpen) {
      document.querySelector('.collapse.navbar-collapse').style.display = 'none';
      setIsOpen(false);
    } else if(!isOpen) {
      document.querySelector('.collapse.navbar-collapse').style.display = 'block';
      setIsOpen(true);
    }
  }
    
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <button className='navbar-toggler' onClick={handleClick} type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Characters</Link>
          </li>
          <li className='nav-item'>
            <Link to='/api/episode' className='nav-link'>Episodes</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;
