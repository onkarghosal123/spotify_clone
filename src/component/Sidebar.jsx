
import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <Link to="/" className="sidebar-link">
          <img src={assets.home_icon} alt="Home" />
          <p>Home</p>
        </Link>

        <div className="sidebar-link">
          <img src={assets.search_icon} alt="Search" />
          <p>Search</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="library">
          <div className="library-left">
            <img src={assets.stack_icon} alt="Library" />
            <p>Your Library</p>
          </div>

          <div className="library-right">
            <img src={assets.arrow_icon} alt="Expand library" />
            <img src={assets.plus_icon} alt="Add playlist" />
          </div>
        </div>

        <div className="sidebar-section">
          <h3>Create your first playlist</h3>
          <p>It's easy, we will help you</p>
          <button>Create playlist</button>
        </div>

        <div className="sidebar-section">
          <h3>Let's find some podcast to follow</h3>
          <p>It's easy, we will help you</p>
          <button>Create playlist</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
