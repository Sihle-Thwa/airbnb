import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
    < div className='mobile_nav' role='navigation' aria-label='Navigate through the site'>
      <label for="main_check" className='main_nav_burger' aria-label='Responsive popup menu'>|||</label>
    <input type='checkbox' id='main_check' className='main_nav_check' aria-hidden="true" tabIndex={0} />
    <nav>
      <ul className='nav_bar_level1'>
        <li>
        <label for="second_check"><span>States</span></label>
        <input type='checkbox' name='second_check' id='second_check' aria-hidden="true"/>

        <ul>
          <li><span>Arizona</span></li>
          <li><span>California</span></li>
        </ul>
        </li>

        <li>
          <label for="third_check"><span>Amenities</span></label>
          <input type='checkbox' name='second_check' id='third_check' aria-hidden="true"/>
          <ul>
            <li><span>Internet</span></li>
            <li><span>Tv</span></li>
            <li><span>WiFi</span></li>
            <li><span>Kitchen</span></li>
            <li><span>Iron</span></li>
          </ul>
        </li>
      </ul>
    </nav>
    </div>
    </header>
  )
}

export default Header