import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import Menu from './Menu'
import FriendsSideBar from './FriendsSideBar'
import './Birthdays.css'; // Create this file for your styles

const Birthdays = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchBirthdays = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/friends/birthdays');
        setFriends(response.data);
      } catch (error) {
        console.error('Error fetching birthdays:', error);
      }
    };

    fetchBirthdays();
  }, []);

  return (
    <>
    <Navbar />
    <Menu />


    <div className="home2">
    <FriendsSideBar />
    <div className="birthday-container">
      <h2>Upcoming Birthdays</h2>
      <ul className="birthday-list">
        {friends.map((friend) => (
          <li key={friend._id} className="birthday-item">
            <img src={friend.profilePicture} alt={friend.username} className="birthday-img" />
            <div className="birthday-info">
              <h3>{friend.username}</h3>
              <p>{new Date(friend.dob).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
};

export default Birthdays;
