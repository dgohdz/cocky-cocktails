import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Stylesheets/Searchbar.css'

function Searchbar() {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchDrink, setSearchDrink] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get('https://cocktail-recipes-tully4school.herokuapp.com/drinks')
      setPosts(response.data);
      setLoading(false)
    }

    loadPosts();
  }, []);
  
  return(
    <>
    <div className='search-input'>
    <input type='text' 
    className='input' 
    id='search' 
    placeholder="Search.."
    onChange={(e) => setSearchDrink(e.target.value)}/>
  </div>
{loading ? (
<h1>Loading...</h1>
) : (
  posts.filter((value) => {
    if(searchDrink === ""){
      return value;
    } else if (value.drinkName.toLowerCase().includes(searchDrink.toLowerCase())
    ){
      return value
    }
  })
  .map((item) => 
  <h4 key={item.drinkIngredients}>{item.drinkName}</h4>)
)}
    </>
  )
}

export default Searchbar

// export default class Searchbar extends Component {
//   constructor(props){
//     super(props)
    
//   }
//   render() {
//     return (
//       <>
//       <div className='search-container'>
      // <div className='search-input'>
      //   <input type='text' 
      //   className='input' 
      //   id='search' 
      //   placeholder={this.props.placeholder}/>
      // </div>
//     </div>
//     <div className='drink-result'>
//     {drinks.map((value, key) => {
//         return <p className='drink-item'> {value.drinkName}</p>
//       })}
//     </div>
//       </>
//     )
//   }
// }


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
//       {drinks.map((value, key) => {
//         return <p className='drink-item'> {value.drinkName}</p>
//       })}
//     </div>
//     </>
//   )
// }

// export default Searchbar