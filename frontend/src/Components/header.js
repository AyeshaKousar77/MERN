import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';

export default function Header({ isAuthenticated,  handleLogout }) {
  const [showMore, setShowMore] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(true);
 
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation
 

  
  const handleToggleMore = () => {
    setShowMore(prevShowMore => !prevShowMore);
  };

  const handleAdmin = (option) => {
    if (option === "developer") {
      setIsUser(false);
      setIsAdmin(true);
      handleLogout();
      setShowMore(false);
      navigate('/AdminLogin');
    } else {
      setIsAdmin(false);
    setIsUser(true);
    setShowMore(false);
    handleLogout();

      navigate('/login');
    }
  };
  return (
    <header className="head">
      <nav className="top">
        <ul className="nav-list flex items-center">

          {isAuthenticated && isUser && (
            <>
             <li className="nav-item">
            <Link to="/">
              <img src="/Assets/logo.png" alt="Logo" className="h-8" height={60} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link text-white font-bold">Home</Link>
          </li>
              <li className="nav-item">
                <Link to="/leagues" className="nav-link text-white hover:text-gray-300">Leagues</Link>
              </li>
              <li className="nav-item">
                <Link to="/teams" className="nav-link text-white hover:text-gray-300">Team</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link text-white hover:text-gray-300">Profile</Link>
              </li>
              <li className="nav-item">
              <button onClick={handleLogout} className="nav-link text-white hover:text-gray-300">Logout</button>
            </li>
            </>
          )}
          {isUser && !isAuthenticated &&   (
            <>
            <li className="nav-item">
            <Link to="/">
              <img src="/Assets/logo.png" alt="Logo" className="h-8" height={60} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link text-white font-bold">Home</Link>
          </li>
              <li className="nav-item">
                <Link to="/login" className="log text-white hover:text-gray-300">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link text-white hover:text-gray-300">Register</Link>
              </li>
            </>
          )}
         
          {!isAuthenticated && isAdmin &&  (
            <li className="nav-item">
              <Link to="/AdminLogin" className="log text-white hover:text-gray-300">Developer</Link>
            </li>
          )}
          {isAuthenticated && isAdmin && (
            <>
             <li className="nav-item">
                <Link to="/AdminPanel" className="nav-link text-white hover:text-gray-300">Admin Panel</Link>
              </li>
              <li className="nav-item">
                <Link to="/Handle leagues" className="nav-link text-white hover:text-gray-300">Handle leagues</Link>
              </li>
             
              <li className="nav-item">
                <Link to="/events" className="nav-link text-white hover:text-gray-300">Handle Events</Link>
              </li>
              <li className="nav-item">
              <button onClick={handleLogout} className="log text-white hover:text-gray-300">Logout</button>
            </li>
            </>
          )}
          
          <li className="nav-item">
            <button onClick={handleToggleMore} className="more text-white hover:text-gray-300">More</button>
            {showMore && (
              <ul className="dropdown-menu">
                <li onClick={() => handleAdmin("user")} className="user text-white hover:text-gray-300">User</li>
                <li onClick={() => handleAdmin("developer")} className="user text-white hover:text-gray-300">Developer</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}