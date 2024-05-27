import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,useNavigate, Navigate, useLocation } from 'react-router-dom';
import Home from './Pages/user/home';
import RegistrationForm from './Pages/user/Registeration';
import Login from './Pages/user/login';
import AdminLogin from './Pages/admin/authentication';
import Leagues from './Pages/user/leagues';
import Teams from './Pages/user/team';
import Layout from './Components/layout';
import UserProfile from './Pages/user/profile';
import EventManagement from './Pages/admin/handleevents';
import {jwtDecode} from 'jwt-decode';
import ScrollToTop from './Components/scroll';
import AdminLeagueForm from './Pages/admin/handleleagues';
import Panel from './Pages/admin/AdminPanel';
import ChangePassword from './Pages/user/chnagePassword';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('token');
        }
      } catch (error) {
        console.error('Invalid user token:', error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  useEffect(() => {
    // Save the current route to localStorage
    localStorage.setItem('currentRoute', location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // Get the stored route from localStorage
    const currentRoute = localStorage.getItem('currentRoute') || '/';
    navigate(currentRoute);
  }, [navigate]);


  const handleLogin = (token) => {
  
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
   
    }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };


  return (
    <Layout isAuthenticated={isAuthenticated}  handleLogout={handleLogout}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/leagues" element={isAuthenticated ? <Leagues /> : <Navigate to="/login" />} />
        <Route path="/teams" element={isAuthenticated ? <Teams /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} />
        <Route path="/AdminLogin" element={<AdminLogin onLogin={handleLogin} />} />
        <Route path="/AdminPanel" element={isAuthenticated ? <Panel/> : <Navigate to="/AdminLogin" />} />
        <Route path="/Handle leagues" element={isAuthenticated ? <AdminLeagueForm /> : <Navigate to="/AdminLogin" />} />
        <Route path="/events" element={isAuthenticated ? <EventManagement /> : <Navigate to="/AdminLogin" />} />
        <Route path="/change_password" element={isAuthenticated ? <ChangePassword /> : <Navigate to="/AdminLogin"/>}/>
      </Routes>
    </Layout>
  );
}

export default App;