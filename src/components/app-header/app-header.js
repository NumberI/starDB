import React from 'react';
import './app-header.css';

const AppHeader = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
    
      <ul className="d-flex">
        <li>
          <a href="#">
            People
          </a>
        </li>
        <li>
          <a href="#">
            Planets
          </a>
        </li>
        <li>
          <a href="#">
            Starships
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AppHeader;