import React from "react";
import "../Styles/Style_components/Sidebar.css"; 

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/images/JMLogo.png" className="logo" />
        <h4>Kashiful-Uloom</h4>
      </div>

      <ul className="sidebar-menu">
        <li>
          <a href="/">
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li>
          <a href="/students">
            <i className="fas fa-users"></i> Students
          </a>
        </li>
        <li>
          <a href="/teachers">
            <i className="fas fa-user-tie"></i> Teachers
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
