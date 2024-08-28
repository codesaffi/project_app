import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/home.css";

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchIconClick = () => {
      setShowSearch(!showSearch);
    };
  return (
    <nav className="navbar">
    <div className={`left-side ${showSearch ? "hide" : ""}`}>
      <NavLink className="logo" to="/home">
      <h2>logo</h2>
     </NavLink>
    </div>

    <div className="right-side">
      <div className={`div search-bar1 ${showSearch ? "show" : ""}`}>
        <input className="search" type="text" name="search" placeholder="Search..." />
        <FontAwesomeIcon
          className={`searchbar-icon ${showSearch ? "show" : ""}`}
          icon={faMagnifyingGlass}
          onClick={handleSearchIconClick}
        />
      </div>

      <div className={`div icon1 ${showSearch ? "hide" : ""}`}>

      <NavLink to="/messages">
       <FontAwesomeIcon className="my-icons" icon={faMessage} />
     </NavLink>

     <NavLink to="/notifications">
     <FontAwesomeIcon className="my-icons" icon={faBell} />
     </NavLink>

      </div>
    </div>
  </nav>
  )
}

export default Navbar