import React from 'react';
import '../styles/global.css';
import logo from '../assets/icons/icon.webp';
import { FaUserCircle } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="topbar">
      <img src={logo} alt="Logo" className="topbar-logo" />
      <div className="topbar-avatar"><FaUserCircle size={36} color="#bdbdbd" /></div>
    </div>
  );
};

export default TopBar;
