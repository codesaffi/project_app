import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/home.css";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users/home/posts', {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching home posts:', err.response ? err.response.data : err.message);
      }
    };
    fetchPosts();
    
  }, []);
  console.log(posts);
  

  return (
    <>
      <Navbar />
      <Menu />

      <div className="page">
      

<div className="home-posts">
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <div className="home-post-header">
            <img className="home-post-profile-picture"
             src={`http://localhost:5000/${post.userId.profilePicture}`}

              alt={post.userId.username} />

            <span className="post-username">{post.userId.username}</span>
          </div>
          <img className="home-post-image" src={`http://localhost:5000/${post.image}`} alt="Post" />
          <div className="home-post-caption">
            <span className="post-username">{post.userId.username}</span> {post.caption}
          </div>
          <div className="post-date">{new Date(post.date).toLocaleString()}</div>
        </div>
      ))}
    </div>

      </div>

    </>
  );
};

export default Home;
