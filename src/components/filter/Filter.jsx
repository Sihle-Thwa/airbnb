import React from 'react';
import './filter.css';

function Filter() {
  return (
   <div className='filters'>
     <div className="locations">
          <h3>States</h3>
          <h4>California, Arizona...</h4>
          <ul class="popover">
            <li><h2>Arizona:</h2>
              <ul>
                <li>Page1</li>
                <li>Page2</li>
              </ul>
            </li>
            <li><h2>California:</h2>
              <ul>
                <li>San Francisco</li>
                <li>Los Altos</li>
              </ul>
            </li>
            </ul>
        </div>
        <div className="amenities">
          <h3>Amenities</h3>
          <h4>Internet, Kitchen...</h4>
          <ul className="popover">
            <li>Internet</li>
            <li>Tv</li>
            <li>Kitchen</li>
            <li>Iron</li>
          </ul>
        </div>
        <button type="button" name="button">Search</button>

   </div>
  )
}

export default Filter