import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/addfriend.css';
import Navbar from './Navbar';
import Menu from './Menu';
import FriendsSideBar from './FriendsSideBar';


  const MyFriendsPage = () => {
    const [friends, setFriends] = useState([]);
    const navigate = useNavigate(); // Initialize navigate
  
    useEffect(() => {
      axios.get('http://localhost:5000/api/friends', { headers: { 'x-auth-token': localStorage.getItem('token') } })
        .then(response => {
          setFriends(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the friends!', error);
        });
    }, []);

  return (

    <>

    <Navbar />
    <Menu />

    <div className="home2">
    <FriendsSideBar />

      <div className='content-section'>
      <h1 className="content-header">my friends</h1>
      <div className="add-friend-page">
        {friends.length > 0 ? (
          friends.map(friend => (
            <div key={friend._id} className="user-card">
              <img 
                src={`http://localhost:5000/${friend.profilePicture}`} 
                alt={friend.username} 
                className="add-friend-profile-picture"
              />
              <p>{friend.username}</p>
              <button
                onClick={() => navigate(`/friend-profile/${friend._id}`)} // Use navigate to direct to the new friend profile route
                className="add-friend-buttons"
              >
                Show Profile
              </button>
            </div>
          ))
        ) : (
          <p>You have no friends yet.</p>
        )}
        </div>
      </div>

    </div>

    </>
    
  );
}; 

export default MyFriendsPage;
