import React, { Component } from "react";
import "../Stylesheets/Body.css";

export default class Body extends Component {
  render() {
    return (
      <section className="body-container">
        <div className="searchbar">
          <form className="form">
            <input className="input" type="text" placeholder="Search a flavor" />
          </form>
        </div>
      </section>
    );
  }
}
