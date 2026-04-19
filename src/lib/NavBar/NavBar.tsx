import React from "react";
import Link from 'next/link'


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <span className="navbar-brand">
        Music App
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/new">
              New
            </Link>
          </li>
          <li>
            <Link href="/api/auth/signin">
              Sign Out
            </Link>
          </li>
          <li>
            <Link href="/api/auth/signout">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
