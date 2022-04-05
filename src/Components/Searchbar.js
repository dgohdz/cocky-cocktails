import { useState, useEffect } from "react";
import axios from "axios";
import "../Stylesheets/Searchbar.css";

function Searchbar() {
  const [data, setData] = useState([]);
  const [searchDrink, setSearchDrink] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        "https://cocktail-recipes-tully4school.herokuapp.com/drinks"
      );
      setData(response.data);
    };

    loadData();
  }, []);

  useEffect(()=>{
    setFilteredData(
      data.filter((data) => data.drinkName.toLowerCase().includes(searchDrink.toLowerCase()))
    )
  },[searchDrink])

  return (
    <>
    <div className="search-container">
    <h1 className="search-title">Search a drink or ingredient!</h1>
        <input
          type="text"
          className="input"
          id="search"
          placeholder="Search.."
          onChange={(e) => setSearchDrink(e.target.value)}
        />
        {filteredData.map((val)=>{
          return <div key={val.id} className='drink-info'>
            <h2 className="drink-name">{val.drinkName}</h2>
            <img className="drink-image" src={val.drinkThumb}/>
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
