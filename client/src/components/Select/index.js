import React, { useState, useEffect } from 'react';
// import nonProfits from "../../nonProfitSeed.json";
import API from "../../utils/API";


function Select(props) {

  // Setting our component's initial state
  const [nonProfits, setNonProfits] = useState([]);

  // When component mounts, load non Profits from db
  useEffect(() => {
    loadNonProfits()
  }, [])
  

  // Loads all nonProfits and sets them to nonProfits
  function loadNonProfits() {
    API.getNonProfits()
      .then(res =>
        setNonProfits(res.data)
        // console.log(res.data)
      )
      .catch(err => console.log(err));
  };
  

  const uniqueCategories = [];
  nonProfits.forEach(nonProfit => {
    if (uniqueCategories.indexOf(nonProfit.category) === -1) {
      uniqueCategories.push(nonProfit.category);
      return false;
    }
  });

  function handleInputChange(event) {    
    // const { name, value } = event.target;
    // console.log(event.target.value);
    props.setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <p id="select">
            Select an option below to view our non-profit organizations by category...
          </p>
        </div>
        <div className="col-2"></div>
      </div>

      <form>
        <div className="form-row">
          <div className="col-4"></div>
          <div className="form-group col-md-4">
            <label htmlFor="inputCategory"></label>
            <select id="inputCategory" name="category" className="form-control"
              onChange={handleInputChange}>
                <option defaultValue>Select category...</option>
              {
                uniqueCategories.map((category, index) => {
                  return (
                    <option key={index} value={category}>{category}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="col-4"></div>
        </div>
        <p id="select">
          ... or select the "Donate Money" or "Volunteer Time" buttons below from any organization in the list below. You can also save your favorite organizations by selecting the "Add To Favorites" button.
          </p>
      </form>
    </div>
  );
}

export default Select;
