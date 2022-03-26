import React, { Component } from "react";
import "../Stylesheets/Body.css";

export default class Body extends Component {
  render() {
    return (
      <section className="body">
        <div className="searchbar-container">
          <form className="form">
            <input type="text" placeholder="Search a flavor" />
          </form>
        </div>
      </section>
    );
  }
}
