import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Sidebar.css';

const Sidebar = () => {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const fetchUnreadCount = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/notifications/unread-count', {
          headers: { 'x-auth-token': token }
        });
        setUnreadCount(res.data.unreadCount);
      } catch (err) {
        console.error('Error fetching unread notifications count:', err.response ? err.response.data : err.message);
      }
    };
    fetchUnreadCount();
  }, [unreadCount]); // Update when unreadCount changes

  return (
    <div className="sidebar">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Profile
      </NavLink>

      <NavLink
        to="/notifications"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Notifications
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </NavLink>

      <NavLink
        to="/my-friends"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        my friends
      </NavLink>

      <NavLink
        to="/addfriends"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        add friend
      </NavLink>

      <NavLink
        to="/friend-request"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        friend request
      </NavLink>

      <NavLink
        to="/messages"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Messages
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Settings
      </NavLink>
      <NavLink
        to="/logout"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
