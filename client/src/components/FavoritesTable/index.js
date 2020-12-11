import React, { useState, useEffect } from 'react';
import "../../pages/style.css";
import API from "../../utils/API";


function FavoritesTable(props) {

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

  // // Setting our component's initial state
  // const [favorites, setFavorites] = useState([]);

  // // When component mounts, load favorites from db
  // useEffect(() => {
  //   loadFavorites()
  // }, [])

  // // Loads all favorites and sets them to favorites
  // function loadFavorites() {
  //   API.getFavorites()
  //     .then(res =>
  //       //setFavorites(res.data)
  //       console.log(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  function deleteFavorite(id) {
    console.log(id);
    API.removeFavorite(id)
      .then(res =>
        console.log(res.data)
      )
      .catch(err => console.log(err));
  }

  return (
    <table className="table table-hover ">

      <tbody className="container">
        {
          nonProfits.map((nonProfit) => {
            return (

              <tr key={nonProfit._id}>
                <td>
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="row">
                        <div className="col-12"><img src={nonProfit.imageURL} alt={nonProfit.name} id="logo" style={{ height: 150, width: 150, marginLeft: 70 }} /></div>
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <div className="row">
                        <div className="col-12">
                          <h2>{nonProfit.name}</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12" id="parafont">
                          {nonProfit.mission}
                          &nbsp;&nbsp;<a className="externalLink" href={nonProfit.contact.website} target="_blank" rel="noopener noreferrer">Visit website</a>
                          <br></br>
                          <button type="button" className="btn btn-danger customBtn shadow" id="delfavbutton"
                            onClick={(event) => {
                              event.preventDefault();
                              deleteFavorite(nonProfit._id);
                            }}><span className="fa fa-trash"></span>&nbsp;&nbsp;&nbsp;Delete Favorite</button>

                          {/* <span><a className="btn btn-success customBtn shadow" href={'/donate?npid=' + nonProfit._id} rel="noopener noreferrer" id="favbutton">FAVORITE</a></span> */}

                          <span><a className="btn btn-success customBtn shadow" href={'/donate?npid=' + nonProfit._id} rel="noopener noreferrer"
                            id="donbutton"><span className="fa fa-donate"></span>&nbsp;&nbsp;&nbsp;Donate money</a></span>

                          <span><a className="btn btn-primary customBtn shadow" href={'/volunteer?npid=' + nonProfit._id} rel="noopener noreferrer"
                            id="volbutton"><span className="fa fa-clock"></span>&nbsp;&nbsp;&nbsp;Volunteer time</a></span>

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

export default FavoritesTable;