// import { Component } from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import Footer from "./Components/Footer";


function App() {
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
    <Header />
    <Searchbar />
    <h1>Search Filter</h1>
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
    <Footer />
    </>
  )

}

//Class component version

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       drinks: [],
//       pic: null,
//       ingredients: null,
//       instructions: null
//     };
//   }

//   componentDidMount(){
//     fetch("https://cocktail-recipes-tully4school.herokuapp.com/drinks")
//     .then(response => response.json())
//     .then(payload => this.setState({ drinks: payload }))
//     .catch(error => console.log(error))
//   }
  
//   getDrinks = () => {
//     let randomNum = Math.floor(Math.random() * this.state.drinks.length)
//     this.setState({ pic: this.state.drinks[randomNum].drinkThumb, ingredients: this.state.drinks[randomNum].drinkIngredients, instructions: this.state.drinks[randomNum].drinkInstructions })
//   }


//   render() {

//     console.log(this.state.drinks);
//     return (
//       <>
//         <div className="app">
//           <Header />
//           <Searchbar />
//           <button onClick={ this.getDrinks}>View Random Drinks</button>
//           { this.state.pic && < img src={ this.state.pic } alt="Drink pic"/> }
//           <p>These are the ingredients { this.state.ingredients }</p>
//           <p>This is how you make it { this.state.instructions }</p>
//           <Footer />
//         </div>
//       </>
//     );
//   }
// }
export default App;
