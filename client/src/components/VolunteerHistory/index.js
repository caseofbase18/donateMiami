import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function VolunteerHistory(props) {

  const [times, setTimes] = useState([]);

  // When component mounts, load volunteer times from db
  useEffect(() => {
    loadTimes()
  }, []);

  function loadTimes() {
    API.getTimes()
      .then(res =>
        setTimes(res.data)
        // console.log(res.data)
      )
      .catch(err => console.log(err));
  };

  // {time._id}
  // {time.name}
  // {time.value}
  // {time.date}


  return (
    <div>
      <table className="table">
        <thead>
          <tr >
            <th scope="col">Organization</th>
            <th scope="col">Hours</th>
            <th scope="col">Date</th>
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
        </tbody>
      </table>
    </div>
  );
}

export default VolunteerHistory;
