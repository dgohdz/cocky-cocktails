import React, { Component } from 'react'
import '../Stylesheets/Searchbar.css'

export default class Searchbar extends Component {
  render() {
    return (
        <>
        <div className='search-container'>
          <label for='search' className='search-label'> Search Drink Flavor</label>
          <input type='search' id='search' placeholder="Search a flavor" className='searchbar'/>
        </div>
        </>
    )
  }
}
