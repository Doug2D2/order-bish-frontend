import '../header/Header.css';
import React from 'react';

export default function Header() {
  return (
    <div className='header'>
      <div className='inner_header'>
        <div className='logo_container'>
          <h1>MY<span>Site</span></h1>
        </div>

        <ul className='navigation'>
          <a><li>Home</li></a>
          <a><li>About</li></a>
        </ul>
      </div>
    </div>
  )
}