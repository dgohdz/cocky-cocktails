import React from 'react'
import '../Stylesheets/Searchbar.css'

const Searchbar = (props) => {
  return (
    <>
    <div className='search-container'>
      <div className='search-input'>
      <input type='search' className='input' id='search' placeholder={props.placeholder} onChange={props.handleChange}/>
      </div>
    </div>
    </>
  )
}

export default Searchbar