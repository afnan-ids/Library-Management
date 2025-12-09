import React from 'react';

function LabNavbar({ onLogout, onBackup }) {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/" className="nav-link">Home</a>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item d-flex">
          <button className="btn btn-link nav-link" onClick={onBackup}>
            <i className="fas fa-database text-success"></i> Backup
          </button>
          <button className="btn btn-link nav-link" onClick={onLogout}>
            <i className="fa fa-power-off text-danger"></i> Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default LabNavbar;
