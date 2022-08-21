import React, { Component } from "react";
import Link from "next/link";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link is-arrowless">Navigation</a>
          <div className="navbar-dropdown">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/theopenwindow">
              <a className="navbar-item">The Open Window</a>
            </Link>
            <Link href="/creative">
              <a className="navbar-item">Creative</a>
            </Link>
            <Link href="/commercial">
              <a className="navbar-item">Commercial</a>
            </Link>
            <hr className="navbar-divider" />
            <div className="navbar-item">
              <div className="buttons">
                <Link href="https://erikaoakvik.us18.list-manage.com/subscribe?u=8880280d0fdab4735a961db2d&id=8b05b0380b">
                  <a className="button" target="_blank">
                    Sign up for essays to your inbox 📬
                  </a>
                </Link>
                <Link href="mailto:erikaoakvik@gmail.com">
                  <a className="button">Say hi ❣️</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
