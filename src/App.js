// import { Component } from "react";
import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import Footer from "./Components/Footer";


function App() {

  return(
    <>
    <div className="App">
    <Header />
    <Searchbar />
    <Footer />
    </div>
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
