import { useState, useEffect } from "react";
import axios from "axios";
import "../Stylesheets/Searchbar.css";

function Searchbar() {
  const [search, setSearch] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(()=>{
    axios.get('https://cocktail-recipes-tully4school.herokuapp.com/drinks')
    .then((response)=>{
      setDrinks(response.data);
    })
  },[])

  useEffect(()=>{
    setFilteredData(
      drinks.filter((drink) => drink.drinkName.toLowerCase().includes(search.toLowerCase()))
    )
  },[search, drinks])

  return (
    <>
    <div className="search-container">
    <h1 className="search-title">Search a drink or ingredient!</h1>
        <input
          type="text"
          className="input"
          id="search"
          placeholder="Search.."
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredData.map((val)=>{
          return <div key={val.id} className='drink-info'>
            <h2 className="drink-name">{val.drinkName}</h2>
            <img className="drink-image" src={val.drinkThumb} alt="drink"/>
            <h3 className="drink-instructions-heading">This is how you make it...</h3>
            <p>{val.drinkInstructions}</p>
            <h3 className="drink-ingredients-heading">These are the ingredients...</h3>
            <p>{val.drinkIngredients}</p>
            </div>
        })}
    </div>
    </>
  )
}

export default Searchbar;
