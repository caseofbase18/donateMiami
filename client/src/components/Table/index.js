import React from 'react';
import nonProfits from "../../nonProfitSeed.json";
import "../../pages/style.css";

function Table(props) {
    return (
        <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
              <th scope="col">Logo</th>
              <th scope="col">Organization</th>
              <th scope="col">Mission Statement</th>
              {/* <th scope="col">Add to Favorites</th> */}
          </tr>
        </thead>

        <tbody>
        {
          nonProfits.map((nonProfit, index) => {
            // console.log(nonProfit.id)
            return (

              <tr key={index}>
                {/* <th scope="row">{index + 1}</th> */}
                <td >
                  <img src={nonProfit.imageURL} alt={nonProfit.name} style={{width: 75}} />
                </td>
                <td><a href={nonProfit.contact.website} target="_blank" rel="noopener noreferrer">{nonProfit.name}</a></td>
                <td>{nonProfit.mission}</td>


                
              </tr>
            )
          })
        }
          
        </tbody>
      </table>

    )
}

export default Table;