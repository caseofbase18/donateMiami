import React from 'react';

function Table() {
    return (
        <table className="highlight">
        <thead>
          <tr>
              <th>Logo</th>
              <th>Organization</th>
              <th>Mission Statement</th>
              <th>Add to Favorites</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>

    )
}

export default Table;