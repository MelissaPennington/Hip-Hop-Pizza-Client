// src/components/RevenueList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RevenueList = () => {
  const [revenueList, setRevenueList] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0); // Change variable name

  useEffect(() => {
    axios.get('/api/revenues/')
      .then((response) => {
        const { revenues, overallTotal } = response.data;
        setRevenueList(revenues);
        setTotalRevenue(overallTotal); // Update the state variable name
      })
      .catch((error) => {
        console.error('Error fetching revenues:', error);
      });
  }, []);

  return (
    <div>
      <h1>Revenue List</h1>
      <div>
        <h2>Overall Total: ${totalRevenue.toFixed(2)}</h2> {/* Update variable name here */}
      </div>
      <div>
        {revenueList.map((revenue) => (
          <div key={revenue.id}>
            <p>Order: {revenue.order.name}</p>
            <p>Date: {new Date(revenue.date).toLocaleString()}</p>
            <p>Payment: {revenue.payment}</p>
            <p>Subtotal: ${revenue.subtotal.toFixed(2)}</p>
            <p>Tip: ${revenue.tip.toFixed(2)}</p>
            <p>Total: ${revenue.total.toFixed(2)}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueList;
