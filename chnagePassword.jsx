import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './profile.css';

const BASE_URL = 'http://localhost:5000';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${BASE_URL}/user/changePassword`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        setMessage('Password updated successfully');
        navigate('/profile');
      } else {
        setMessage('Enter correct old password!');
      }
    } catch (error) {
      setMessage('Error updating password');
      console.error('Error updating password:', error);
    }
  };

  return (
    
      <form onSubmit={handleSubmit} className="container">
          <h1>Change Password</h1>
          <label>Old Password:</label>
          <input type="password" name="oldPassword" value={formData.oldPassword} onChange={handleChange} required />
        
      
          <label>New Password:</label>
          <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} required />
        
        <button type="submit">Change Password</button>
        {message && <p>{message}</p>}
      </form>
      
    
  );
};

export default ChangePassword;
