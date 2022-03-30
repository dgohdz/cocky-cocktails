import React, { Component } from "react";
import '../Stylesheets/Header.css'

class Header extends Component {
  render() {
    return (
      <>
        <section>
          <div className="header-container">
            <h1 className="neon-title">Cocky Cocktails</h1>
          </div>
        </section>
      </>
    );
  }
}

export default Header;
