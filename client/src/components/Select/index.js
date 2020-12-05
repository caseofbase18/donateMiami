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
    const { name, value } = event.target;
    console.log(event.target.value);
  };

  return (
    <div>
      <p>
        Select a category to see a list of non-profit organizations by type.
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

export default Select;
