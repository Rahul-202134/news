import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNewsChannelChange = (event) => {
    const selectedChannel = event.target.value;
    // Define URLs for your news channels
    const channelUrls = {
      '1': 'https://www.aajtak.in/',
      '2': 'https://www.indianews.com/',
      '3': 'https://zeenews.india.com/',
    };
    
    if (selectedChannel in channelUrls) {
      window.location.href = channelUrls[selectedChannel];
    }
  };
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-info">
      <Link className="navbar-brand text-white" to="/">
        <h3>Daily News</h3>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/general">
              General
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/business">
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/health">
              Health
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/science">
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/sports">
              Sports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/technology">
              Technology
            </Link>
          </li>
        </ul>
        <div className="text-white ml-auto margin-btn">
          <select className="form-control text-white bg-primary" onChange={handleNewsChannelChange}>
            <option value="">News Channel</option>
            <option value="1">Aaj Tak</option>
            <option value="2">India News</option>
            <option value="3">Zee News</option>
          </select>
        </div>
        <div>
          <span className='signup'>
          {localStorage.getItem("authToken") ? (
          <Link className='btn btn-primary' onClick={handleLogout}>
            Logout
          </Link>
          ):(
            <Link className=" btn btn-primary" to="/Login">
              Login
            </Link>
          )}
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
