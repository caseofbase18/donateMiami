import React from "react";
import nonProfits from "../../nonProfitSeed.json";

function Select() {

  const uniqueCategories = [];
  nonProfits.forEach(nonProfit => {
    if (uniqueCategories.indexOf(nonProfit.category) === -1) {
      uniqueCategories.push(nonProfit.category);
      return false;
    }
  });

  function handleInputChange(event) {
    // const { name, value } = event.target;
    console.log(event.target.value);
  };

  return (
    <div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <p id="select">
            Select an option below to view our non-profit organizations by category...
          </p>
        </div>
        <div class="col-2"></div>
      </div>

      <form>
        <div className="form-row">
          <div className= "col-4"></div>
          <div className="form-group col-md-4">
            <label htmlFor="inputCategory"></label>
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
          <div className= "col-4"></div>
        </div>
        <p id="select">
          ... or select the "Donate Money" or "Volunteer Time" buttons below from any organization in the list below. You can also save your favorite organizations by selecting the "Add To Favorites" button.
          </p>
      </form>
    </div>
  );
}

export default Select;
