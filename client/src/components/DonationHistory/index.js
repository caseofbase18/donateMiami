import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function DonationHistory(props) {

  const [transactions, setTransactions] = useState([]);
  const [donationTotal, setDonationTotal] = useState([]);

  // When component mounts, load donation transactions from db
  useEffect(() => {
    loadTransactions()
  }, []);

  function loadTransactions() {
    API.getTransactions()
      .then(res => {
        setTransactions(res.data)
        calculateTotal(res.data)
        // console.log(res.data)
      })
      .catch(err => console.log(err));
  };

    // Use reduce method to retrieve sum of donation values
  function calculateTotal(donations) {
    let finalValue =
      donations.reduce((value, element) => {
        return value + element.value;
      }, 0)
    setDonationTotal(finalValue)
    // console.log(finalValue)
  }

  // {transaction._id}
  // {transaction.name}
  // {transaction.value}
  // {transaction.date}

  return (
    <div>
      <table className="table" id="donhistable">
        <thead>
          <tr >
            <th scope="col"><b>Organization</b></th>
            <th scope="col"><b>Amount</b></th>
            <th scope="col"><b>Date</b></th>
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
          <tr className="total" id="donhistotal">
            <th><b>Total Donations</b></th>
            <th><b>{donationTotal}</b></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DonationHistory;
