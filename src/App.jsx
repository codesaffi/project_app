import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import CreateProfile from './components/CreateProfile';
import './styles/App.css';
import Notifications from './components/Notifications';
import AddFriendPage from './components/AddFriendPage';
import UserProfilePage from './components/UserProfilePage';
import FriendRequestsPage from './components/FriendRequestsPage';
import MyFriendsPage from './components/MyFriendsPage';
import MessagesPage from './components/MessagesPage';
import ChatPage from './components/ChatPage';
import ModifyProfile from './components/ModifyProfile';
import FriendProfile from './components/FriendProfile';
import CreatePost from './components/CreatePost';
import ChatFriendProfile from './components/ChatFriendProfile';
import Settings from './components/Settings';
import Friends from './components/Friends';
import Birthdays from './components/Birthdays';


function App() {

  return (
    <Router>
      <div className="home1">
        <Routes>
          <Route path="/project_app/" element={<Login />} />
          <Route path="/project_app/login" element={<Login />} />
          <Route path="/project_app/signup" element={<Signup />} />
          <Route path="/project_app/home" element={<Home />} />
          <Route path="/project_app/profile" element={<Profile />} />
          <Route path="/project_app/create-profile" element={<CreateProfile />} />
          <Route path="/project_app/modify-profile" element={<ModifyProfile />} />
          <Route path="/project_app/create-post" element={<CreatePost />} />
          <Route path="/project_app/friends" element={<Friends />} />
          <Route path="/project_app/addfriends" element={<AddFriendPage />} />
          <Route path="/project_app/profile/:id" element={<UserProfilePage />} />
          <Route path="/project_app/friend-request" element={<FriendRequestsPage />} />
          <Route path="/project_app/my-friends" element={<MyFriendsPage />} />
          <Route path="/project_app/friend-profile/:id" element={<FriendProfile />} />
          <Route path="/project_app/birthdays" element={<Birthdays />} />
          <Route path="/project_app/messages" element={<MessagesPage />} />
          <Route path="/project_app/chat/:friendId" element={<ChatPage />} />
          <Route path="/project_app/chat-friend-profile/:id" element={<ChatFriendProfile />} />
          <Route path="/project_app/notifications" element={<Notifications />} />
          <Route path="/project_app/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
