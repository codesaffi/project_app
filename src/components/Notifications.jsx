import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/notifications.css';
import Navbar from "./Navbar";
import Menu from "./Menu";

const Notifications = ({ onUpdateUnreadCount }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/notifications', {
          headers: { 'x-auth-token': token }
        });
        setNotifications(res.data);
      } catch (err) {
        console.error('Error fetching notifications:', err.response ? err.response.data : err.message);
      }
    };
    fetchNotifications();
  }, []);

  const markAsRead = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.put(`http://localhost:5000/api/notifications/${id}`, {}, {
        headers: { 'x-auth-token': token }
      });
      setNotifications(notifications.map(notification => 
        notification._id === id ? { ...notification, readStatus: true } : notification
      ));
      // Notify the parent component to update the unread count
      onUpdateUnreadCount();
    } catch (err) {
      console.error('Error marking notification as read:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <>
          <Navbar />
          <Menu />
      <div className="notifications">
      <div className="notification-container">
        <h2 className='noti-header'>Notifications</h2>
        {notifications.length > 0 ? (
          <ul className='noti-ul'>
            {notifications.map(notification => (
              // <li key={notification._id} className={notification.readStatus ? 'read' : 'unread'}>
              <li 
  key={notification._id} 
  className={`noti-li ${notification.readStatus ? 'read' : 'unread'}`}
>
{/* </li> */}
                {notification.message}
                {!notification.readStatus && (
                  <button onClick={() => markAsRead(notification._id)}>Mark as Read</button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No notifications yet.</p>
        )}
      </div>
      </div>
    </>
  );
};

export default Notifications;
