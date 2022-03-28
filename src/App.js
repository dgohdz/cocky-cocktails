import { Component } from "react";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
// import DrinkShow from "./Components/DrinkShow";
import Footer from "./Components/Footer";
import mockdrinks from './MockDrinks'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: mockdrinks.drinks,
      pic: ""
    };
  }
  
  getDrinks = () => {
    let randomNum = Math.floor(Math.random() * this.state.drinks.length)
    this.setState({ pic: this.state.drinks[randomNum].drinkThumb })
  }

  render() {

    console.log(this.state.drinks);
    return (
      <>
        <div className="app">
          <Header />
          <Body />
          <Searchbar />
          <button onClick={ this.getDrinks}>View Drinks</button>
          <img src={ this.state.pic } alt="Drink pic"/>
          {/* <DrinkShow /> */}
          <Footer />
        </div>
      </>
    );
  }
}
export default App;
