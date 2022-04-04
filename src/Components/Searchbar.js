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
    <div>
        <input
          type="text"
          className="input"
          id="search"
          placeholder="Search.."
          onChange={(e) => {setSearchDrink(e.target.value)}}
        />
        {filteredData.length === 0 ? <div>Sorry, we don't have the drink you're searching for :(</div> : filteredData.map((val)=>{
          return <div key={val.id}>
            <img src={val.drinkThumb} alt='Drink Image'/>
            <p>{val.drinkName}</p>
            </div>
        })}
    </div>
  )
}

export default Searchbar;
