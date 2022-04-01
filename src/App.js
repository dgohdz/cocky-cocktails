import { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import Footer from "./Components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      pic: null,
      // ingredients: '',
      // instructions: '',
      // searchField: ''
    };
  }

  componentDidMount(){
    fetch("https://cocktail-recipes-tully4school.herokuapp.com/drinks")
    .then(response => response.json())
    .then(payload => this.setState({ drinks: payload }))
    .catch(error => console.log(error))
  }


  // randomDrinks = () => {
  //   let randomNum = Math.floor(Math.random() * this.state.drinks.length)
  //   this.setState({ pic: this.state.drinks[randomNum].drinkThumb, ingredients: this.state.drinks[randomNum].drinkIngredients, instructions: this.state.drinks[randomNum].drinkInstructions })
  // }

  render() {
    // const{drinks, ingredients, instructions} = this.state
    // const filteredDrinks = drinks.filter()
    return (
      <>
        <div className="app">
          <Header />
          {/* <Searchbar placeholder="Search a flavor..." handleChange={(e) => this.setState({searchField:e.target.value})}/> */}

          <p>These are the ingredients</p>
          <p>This is how you make it</p>
          <Footer />
        </div>
      </>
    );
  }
}
export default App;
