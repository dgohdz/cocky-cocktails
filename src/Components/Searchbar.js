import React, { Component } from 'react'
import '../Stylesheets/Searchbar.css'

export default class Searchbar extends Component {
  render() {
    return (
        <>
        <div className='search-container'>
          <div className='search-input'>
          <input type='search' id='search' placeholder="Search a flavor" className='input'/>
          </div>
        </div>
        </>
    )
  }
}
