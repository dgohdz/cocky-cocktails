import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import Drinks from "./Components/Drinks";
import Footer from "./Components/Footer";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <div className="app">
          <Header />
          <Body />
          <Searchbar />
          <Drinks />
          <Footer />
        </div>
      </>
    );
  }
}
export default App;
