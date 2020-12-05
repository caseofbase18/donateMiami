import React from "react";
import nonProfits from "../../nonProfitSeed.json";

// import Select from 'react-dropdown-select';

// export const Selector = ({ options }) => (
//   <Select
//     multi
//     options={options}
//     onChange={(values) => this.onChange(values)}
//   />
// );

function Select() {
  return (
    <div>
      <h1>Search Page</h1>
      <p>
        ADD the seach dropdown to the navbar/header jumbotron

        DELETE the search page
      </p>

      {/* <Select
        options={options}
        values={[
            
        ]}
        onChange={(value) => console.log(value)}
      /> */}

      <body>
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputCategory">Category</label>
              <select id="inputCategory" className="form-control">
                {
                  nonProfits.map((nonProfit, index) => {
                    return (
                      <div>
                        <option selected>Select category...</option>
                        <option value={nonProfit.category}>{nonProfit.category}</option>
                        {/* <option value="Animals">Animals</option>
                        <option value="HumanServices">Human Services</option>
                        <option value="ArtsCulture">Arts & Culture</option>
                        <option value="Veterans">Veterans</option>
                        <option value="Education">Education</option>
                        <option value="Health">Health</option>
                        <option value="Philanthropy">Philanthropy</option>
                        <option value="HomelessHousing">Homeless & Housing</option> */}
                      </div>
                    )
                  })
                }

              </select>
            </div>




          </div>

        </form>
      </body>

    </div>
  );
}

export default Select;
