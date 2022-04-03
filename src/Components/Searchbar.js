import React, { Component } from 'react'
import '../Stylesheets/Searchbar.css'

export default class Searchbar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
      <div className='search-container'>
      <div className='search-input'>
        <input type='text' 
        className='input' 
        id='search' 
        placeholder={this.props.placeholder}/>
      </div>
    </div>
    <div className='drink-result'>

    </div>
      </>
    )
  }
}


// const Searchbar = (placeholder, drinks) => {

//   return (
//     <>
//     <div className='search-container'>
//       <div className='search-input'>
//         <input type='text' 
//         className='input' 
//         id='search' 
//         placeholder="search"/>
//       </div>
//     </div>
//     <div className='drink-result'>
//       {/* {drinks.map((value, key) => {
//         return <p className='drink-item'> {value.drinkName}</p>
//       })} */}
//     </div>
//     </>
//   )
// }

// export default Searchbar