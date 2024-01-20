// pages/revenue.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RevenueList from '../../components/RevenueList';

export default function Revenue() {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [revenueData, setRevenueData] = useState([]); // State to store revenue data

  useEffect(() => {
    axios.get('/api/revenues/')
      .then((response) => {
        const { overallTotal, revenues } = response.data;
        setTotalRevenue(overallTotal);
        setRevenueData(revenues);
      })
      .catch((error) => {
        console.error('Error fetching total revenue:', error);
      });
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1>View Total Revenue</h1>
        <h2>Total Revenue: ${totalRevenue.toFixed(2)}</h2>
        <RevenueList revenues={revenueData} />
      </div>
    </div>
  );
}

// // pages/revenue.js
// import React from 'react';

// export default function Revenue() {
//   return (
//     <div>
//       <div className="text-center">
//         <h1>View Total Revenue</h1>
//         {/* Add logic to fetch and display total revenue */}
//       </div>
//     </div>
//   );
// }
