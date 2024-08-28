import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/addfriend.css';
import '../styles/friendreq.css';
import Navbar from './Navbar';
import Menu from './Menu';
import FriendsSideBar from './FriendsSideBar';

const FriendRequestsPage = () => {
  const [friendRequests, setFriendRequests] = useState([]);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 690);

  useEffect(() => {
    // Fetch friend requests from the server
    axios.get('http://localhost:5000/api/friends/requests', { headers: { 'x-auth-token': localStorage.getItem('token') } })
      .then(response => {
        setFriendRequests(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the friend requests!', error);
      });

    // Update the view on window resize
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 690);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAcceptRequest = (requesterId) => {
    axios.post('http://localhost:5000/api/friends/accept', { requesterId }, { headers: { 'x-auth-token': localStorage.getItem('token') } })
      .then(() => {
        setFriendRequests(friendRequests.filter(request => request._id !== requesterId));
      })
      .catch(error => {
        console.error('There was an error accepting the friend request!', error);
      });
  };

  const handleDeleteRequest = (requesterId) => {
    axios.post('http://localhost:5000/api/friends/delete', { requesterId }, { headers: { 'x-auth-token': localStorage.getItem('token') } })
      .then(() => {
        setFriendRequests(friendRequests.filter(request => request._id !== requesterId));
      })
      .catch(error => {
        console.error('There was an error deleting the friend request!', error);
      });
  };

  const handleUsernameClick = (userId) => {
    window.location.href = `/profile/${userId}`;
  };

  const handleSeeAllClick = () => {
    window.location.href = '/home'; // Adjust this to the correct route for viewing all requests
  };

  return (
    <>
      <Navbar />
      <Menu />
      <div className="home2">
        <FriendsSideBar />
        <div className={"friend-requests-page" + " " + "content-section"}>
          <h1 className="req-content-header">Friend Requests</h1>
          <div className="friend-req-page">
            {isMobileView ? (
              // Mobile View: Show only one request and "See All" button
              <>
                {friendRequests.length > 0 && (
                  <div key={friendRequests[0]._id} className="req-user-card">
                    <img
                      src={`http://localhost:5000/${friendRequests[0].profilePicture}`}
                      alt={friendRequests[0].username}
                      className="req-profile-picture"
                      onClick={() => handleUsernameClick(friendRequests[0]._id)}
                    />
                    <div className='mbl-view-1'>
                      <p 
                        className="clickable-username"
                        onClick={() => handleUsernameClick(friendRequests[0]._id)}
                      >
                        {friendRequests[0].username}
                      </p>
                      <div className='req-btns'>
                        <button
                          onClick={() => handleAcceptRequest(friendRequests[0]._id)}
                          className="accept-button"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleDeleteRequest(friendRequests[0]._id)}
                          className="delete-button"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className='see-all' onClick={handleSeeAllClick}>
                         See All
                       </div>
                  </div>
                )}
              </>
            ) : (
              // Desktop View: Show all requests
              friendRequests.map(request => (
                <div key={request._id} className="req-user-card">
                  <img
                    src={`http://localhost:5000/${request.profilePicture}`}
                    alt={request.username}
                    className="req-profile-picture"
                    onClick={() => handleUsernameClick(request._id)}
                  />
                  <div className='mbl-view-1'>
                    <p 
                      className="clickable-username"
                      onClick={() => handleUsernameClick(request._id)}
                    >
                      {request.username}
                    </p>
                    <div className='req-btns'>
                      <button
                        onClick={() => handleAcceptRequest(request._id)}
                        className="accept-button"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleDeleteRequest(request._id)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequestsPage;
