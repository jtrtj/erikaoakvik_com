import React, { Component } from "react";

class Hero extends Component {
  render() {
    function randColor() {
      let colors = [
        "pink",
        "orange",
        "black",
        "grey",
        "blue",
        "indigo",
        "violet",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function randGradient() {
      return `linear-gradient(to bottom right, ${randColor()}, ${randColor()})`;
    }

    return (
      <>
        <nav className="navbar">
          <div className="container">
            <div id="navMenu" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">Home</a>
                <a className="navbar-item">Creative</a>
                <a className="navbar-item">Commercial</a>
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

        <section
          style={{ backgroundImage: `${randGradient()}` }}
          className="hero is-link is-fullheight-with-navbar"
        >
          <div className="hero-body">
            <section className="section">
              <h1 className="title">Erika Oakvik</h1>
              <h2 className="subtitle">writer & editor</h2>
            </section>
          </div>
        </section>
      </>
    );
  }
}

export default Hero;
