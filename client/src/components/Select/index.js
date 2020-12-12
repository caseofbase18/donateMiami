import React, { useState, useEffect } from 'react';
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

      <h5 id="select">
        Select an option below to find non-profit organizations by category...
          </h5>


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

        <h5 id="select">
          ... or find an organization from the list below.
          </h5>
        <br></br>

        <h5 id="instructions"> Once you have found the organization you would like to support, then choose the <u>Donate Money</u> or <u>Volunteer Time</u> buttons to make a financial contribution or offer volunteer hours. You can also save your favorite organizations by selecting the <u>Add To Favorites</u> button.
        </h5>

      </form>
    </div>
  );
}

export default Select;
