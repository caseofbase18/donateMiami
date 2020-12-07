import React from 'react';
import nonProfits from "../../nonProfitSeed.json";
import "../../pages/style.css";
// import "./style.css";


function Table(props) {

  // functions that need to be handled by the table component:

  // 1. When the favorites button is clicked, get the id of the nonProfit 
  // and add the nonProfit to the list of favorites

  function addFavorite(nonProfit) {
    console.log(nonProfit)
  }

  // 2. When the view website link is clicked, open the nonProfit's website in a new tab

  function donateMoney(nonProfit) {
    console.log(nonProfit)
  }

  function volunteerTime(nonProfit) {
    console.log(nonProfit)
  }





  return (
    <table className="table table-hover ">

      <tbody className="container">
        {
          nonProfits.map((nonProfit, index) => {
            return (

              <tr key={index}>
                <td>
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="row">
                        <div className="col-12"><img src={nonProfit.imageURL} alt={nonProfit.name} id="logo" style={{ height: 150, width: 150, marginLeft: 70 }}/></div>
                      </div>
                  </div>
                    <div className="col-md-8 col-sm-12">
                      <div className="row">
                        <div className="col-12">
                          <h1>{nonProfit.name}</h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {nonProfit.mission}
                          &nbsp;&nbsp;<a className="externalLink" href={nonProfit.contact.website} target="_blank" rel="noopener noreferrer">Visit website</a>
                          <br></br>
                          <button type="button" className="btn btn-warning customBtn shadow" id= "favbutton"
                            onClick={(event) => {
                              event.preventDefault();
                              addFavorite(nonProfit.name);
                              }}><span className="fa fa-heart"></span>&nbsp;&nbsp;&nbsp;Add To Favorites</button>
                          <button type="button" className="btn btn-success customBtn shadow" id= "donbutton"
                            onClick={(event) => {
                              event.preventDefault();
                              donateMoney(nonProfit.name);
                            }}><span className="fa fa-donate"></span>&nbsp;&nbsp;&nbsp;Donate money</button>
                          <button type="button" className="btn btn-primary customBtn shadow" id= "volbutton"
                            onClick={(event) => {
                              event.preventDefault();
                              volunteerTime(nonProfit.name);
                            }}><span className="fa fa-clock"></span>&nbsp;&nbsp;&nbsp;Volunteer time</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )
          })
        }

      </tbody>

    </table>
    
    
    

  )
}

export default Table;