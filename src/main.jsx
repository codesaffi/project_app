// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )







import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import CreateProfile from "./components/CreateProfile.jsx";
import ModifyProfile from "./components/ModifyProfile.jsx";
import CreatePost from "./components/CreatePost.jsx";
import AddFriendPage from "./components/AddFriendPage.jsx";
import FriendRequestsPage from "./components/FriendRequestsPage.jsx";
import MyFriendsPage from "./components/MyFriendsPage.jsx";
import Birthdays from "./components/Birthdays.jsx";
import MessagesPage from "./components/MessagesPage.jsx";
import Notifications from "./components/Notifications.jsx";
import Settings from "./components/Settings.jsx";
import ChatFriendProfile from "./components/ChatFriendProfile.jsx";
import ChatPage from "./components/ChatPage.jsx";
import FriendProfile from "./components/FriendProfile.jsx";
import UserProfilePage from "./components/UserProfilePage.jsx";
import Signup from "./components/Signup.jsx";
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/project_app/",
    element: <App />,
    children: [
      {
        path: "/project_app/",
        element:<Login />,
      },
      {
        path: "/project_app/login",
        element: <Login />,
      },
      {
        path: "/project_app/signup",
        element: <Signup />,
      }, 
      {
        path: "/project_app/home",
        element: <Home />,
      },
      {
        path: "/project_app/profile",
        element: <Profile />,
      },
      {
        path: "/project_app/create-profile",
        element: <CreateProfile />,
      },
      {
        path: "/project_app/modify-profile",
        element: <ModifyProfile />,
      },
      {
        path: "/project_app/create-post",
        element: <CreatePost />,
      },
      {
        path: "/project_app/friends",
        element: <Friends />,
      },
      {
        path: "/project_app/addfriends",
        element: <AddFriendPage />,
      },
      {
        path: "/project_app/profile/:id",
        element: <UserProfilePage />,
      },
      {
        path: "/project_app/friend-request",
        element: <FriendRequestsPage />,
      },
      {
        path: "/project_app/my-friends",
        element: <MyFriendsPage />,
      },
      {
        path: "/project_app/friend-profile/:id",
        element: <FriendProfile />,
      },
      {
        path: "/project_app/birthdays",
        element: <Birthdays />,
      },
      {
        path: "/project_app/messages",
        element: <MessagesPage />,
      },
      {
        path: "/project_app/chat/:friendId",
        element: <ChatPage />,
      },
      {
        path: "/project_app/chat-friend-profile/:id",
        element: <ChatFriendProfile />,
      },
      {
        path: "/project_app/notifications",
        element: <Notifications />,
      },
      {
        path: "/project_app/settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") ).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);