import { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar"
import Footer from "./Components/Footer";
import mockdrinks from "./MockDrinks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: mockdrinks.drinkName,
      name: "",
      ingredients: "",
      instructions: ""
    };
  }

  /*componentDidMount(){
    fetch("https://cocktail-recipes-tully4school.herokuapp.com/drinks")
    .then(response => response.json())
    .then(payload => this.setState({ drinks: payload }))
    .catch(error => console.log(error))
  }*/

  //Drink search result
  // {drinks.map((value, key) => {
  //   return <p className='drink-item'> {value.drinkName}</p>
  // })}

  randomDrinks = () => {
    let randomNum = Math.floor(Math.random() * this.state.drinks.length)
    this.setState({ name: this.state.drinks[randomNum].drinkName, ingredients: this.state.drinks[randomNum].drinkIngredients, instructions: this.state.drinks[randomNum].drinkInstructions })
  }

  render() {
    // const{drinks, ingredients, instructions} = this.state
    // const filteredDrinks = drinks.filter()
    return (
      <>
        <div className="app">
          <Header />
          <Searchbar placeholder="Search a flavor..."/>
          <button onClick={this.randomDrinks}>View Random Drinks</button>
          <p>{this.state.name}</p>
          <Footer />
        </div>
      </>
    );
  }
}
export default App;
