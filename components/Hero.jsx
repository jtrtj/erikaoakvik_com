import React, { Component } from "react";

function randColor() {
  let colors = ["pink", "orange", "black", "grey", "blue", "indigo", "violet"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randGradient() {
  return `linear-gradient(to bottom right, ${randColor()}, ${randColor()})`;
}

class Hero extends Component {
  render() {
    return (
      <>
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
