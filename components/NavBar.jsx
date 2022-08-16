import React, { Component } from "react";
import Link from "next/link";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <Link href="/">
                <a className="navbar-item">Home</a>
              </Link>
              <Link href="/creative">
                <a className="navbar-item">Creative</a>
              </Link>
              <Link href="/commercial">
                <a className="navbar-item">Commercial</a>
              </Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-dark">Contact</a>
                  <a className="button is-link">Subscribe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
