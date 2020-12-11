import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function VolunteerHistory(props) {

  const [times, setTimes] = useState([]);
  const [volunteerTotal, setVolunteerTotal] = useState([]);

  // When component mounts, load volunteer times from db
  useEffect(() => {
    loadTimes()
  }, []);

  function loadTimes() {
    API.getTimes()
      .then(res => {
        setTimes(res.data)
        calculateTotal(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  function calculateTotal(volunteerHours) {
    let finalValue =
      volunteerHours.reduce((value, element) => {
        return value + element.value;
      }, 0)
    setVolunteerTotal(finalValue)
    console.log(finalValue)
  }

  // {time._id}
  // {time.name}
  // {time.value}
  // {time.date}

  return (
    <div>
      <table className="table" id="volhistable">
        <thead>
          <tr >
            <th scope="col"><b>Organization</b></th>
            <th scope="col"><b>Hours</b></th>
            <th scope="col"><b>Date</b></th>
          </tr>
        </thead>

        <tbody>
          {
            times.map((time) => {
              return (
                <tr key={time._id}>
                  <td>{time.name}</td>
                  <td>{time.value}</td>
                  <td>{time.date}</td>
                </tr>
              )
            })
          }
          <tr className="total" id="volhisttotal">
            <th><b>Total Hours</b></th>
            <th><b>{volunteerTotal}</b></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VolunteerHistory;
