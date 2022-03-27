import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import DrinkShow from "./Components/DrinkShow";
import Footer from "./Components/Footer";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };
  }

  componentDidMount() {
    this.readDrinks();
  }

  readDrinks = () => {
    fetch("https://cocktail-recipes-tully4school.herokuapp.com/drinks")
      .then((response) => {
        return response.json();
      })
      .then((drinksArray) => {
        this.setState({ drinks: drinksArray });
      })
      .catch((errors) => {
        console.log("drinks read fetch errors", errors);
      });
  };

  render() {
    return (
      <>
        <div className="app">
          <Header />
          <Body />
          <Searchbar />
          <DrinkShow />
          <Footer />
          <button onClick={this.readDrinks}>Search</button>
          <p>Try these drinks {this.state.drinks.drinks}</p>
        </div>
      </>
    );
  }
}
export default App;
