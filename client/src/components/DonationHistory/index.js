import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function DonationHistory(props) {

  const [transactions, setTransactions] = useState([]);

  // When component mounts, load donation transactions from db
  useEffect(() => {
    loadTransactions()
  }, []);

  function loadTransactions() {
    API.getTransactions()
      .then(res =>
        setTransactions(res.data)
        // console.log(res.data)
      )
      .catch(err => console.log(err));
  };

  // {transaction._id}
  // {transaction.name}
  // {transaction.value}
  // {transaction.date}

  return (
    <div>
      <table className="table">
        <thead>
          <tr >
            <th scope="col">Organization</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map((transaction) => {
              return (
                <tr key={transaction._id}>
                  <td>{transaction.name}</td>
                  <td>{transaction.value}</td>
                  <td>{transaction.date}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default DonationHistory;
