import React, { useEffect } from 'react';
import './styles/Header.css';

const Header = () => {
  const d = new Date();
  const date = d.toDateString();

  return (
    <div className='header'>
      <div style={{ fontWeight: 700 }}>{date}</div>
      <br />
    </div>
  );
};

export default Header;
