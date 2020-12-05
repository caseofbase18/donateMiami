import React from "react";
import nonProfits from "../nonProfitSeed.json";



function Search() {

  const uniqueCategories = [];
  nonProfits.forEach(nonProfit => {
    if (uniqueCategories.indexOf(nonProfit.category) === -1) {
      uniqueCategories.push(nonProfit.category);
      return false;
    }
  });

  function handleInputChange(event) {
    //const { name, value } = event.target;
    console.log(event);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <p>
        ADD the seach dropdown to the navbar/header jumbotron

        DELETE the search page
      </p>

      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputCategory">Category</label>
            <select id="inputCategory" className="form-control"
              onChange={handleInputChange}>              
              {
                uniqueCategories.map((category, index) => {
                  return (
                    <option key={index} value={category}>{category}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
