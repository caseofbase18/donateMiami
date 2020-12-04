import React from "react";

// import Select from 'react-dropdown-select';

// export const Selector = ({ options }) => (
//   <Select
//     multi
//     options={options}
//     onChange={(values) => this.onChange(values)}
//   />
// );

function Search() {
  return (
    <div>
      <h1>Search Page</h1>
      <p>
        ADD the seach dropdown to the navbar/header jumbotron

        DELETE the search page
      </p>

      {/* <Select
        options={options}
        values={[]}
        onChange={(value) => console.log(value)}
      /> */}

      <body>

        <form>          

          <div className="form-row">                            
                    
            <div className="form-group col-md-4">
              <label for="inputOrganization">Name of Organization</label>
              <select id="inputOrganization" className="form-control">
                <option selected>Select organization...</option>               
                <option value="Women">Women of Tomorrow</option>
                <option value="Cat">Cat Network, Inc.</option>
                <option value="Pelican">Pelican Harbor Seabird Station, Inc.</option>
                <option value="Joshuas">Joshuas Heart Foundation Inc</option>
                <option value="Cuatrogatos">Cuatrogatos Foundation Inc</option>
                <option value="Whispering">Whispering Manes Therapeutic Riding Center</option>
                <option value="Take">Take Stock in Children</option>
                <option value="American">American Childrens Orchestras for Peace</option>
                <option value="National">National Voices for Equality Education and Enlightenment</option>
                <option value="Veterans">Veterans Ocean Adventures, Inc</option>
                <option value="Sandals">Sandals Foundation Inc</option>
                <option value="Art">Art Studio Inc</option>
                <option value="Bridge">Bridge to Hope</option>
                <option value="Project">Project Medishare for Haiti Inc</option>
                <option value="Universal">Universal Aid for Children, Inc.</option>
                <option value="Biscayne">Biscayne Bay Foundation</option>
                <option value="Amigos">Amigos Near Foundation</option>
                <option value="Mystic">Mystic Force Foundation</option>
                <option value="Sundari">Sundari Foundation, Inc.</option>
                <option value="Artefactus">Artefactus Cultural Project</option>
              </select>
            </div>

            <div className="form-group col-md-4">
              <label for="inputCategory">Category</label>
              <select id="inputCategory" className="form-control">
                <option selected>Select category...</option>                
                <option value="ChildrenYouth">Children & Youth</option>
                <option value="Animals">Animals</option>
                <option value="HumanServices">Human Services</option>
                <option value="ArtsCulture">Arts & Culture</option>
                <option value="Veterans">Veterans</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Philanthropy">Philanthropy</option>
                <option value="HomelessHousing">Homeless & Housing</option>


              </select>
            </div>
            
          </div>          

        </form>
      </body>

    </div>
  );
}

export default Search;
