import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  const router = useRouter();

  const redirectToOrders = () => {
    router.push('/orders');
  };

  const redirectToCreateOrder = () => {
    router.push('/orders/new');
  };

  const redirectToRevenue = () => {
    router.push('/revenue/revenue');
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.fbUser.displayName}! </h1>
      <Button variant="primary" type="button" size="lg" className="home-btn" onClick={redirectToOrders}>
        View Orders
      </Button>
      <Button variant="success" type="button" size="lg" className="home-btn" onClick={redirectToCreateOrder}>
        Create Order
      </Button>
      <Button variant="info" type="button" size="lg" className="home-btn" onClick={redirectToRevenue}>
        View Revenue
      </Button>
    </div>
  );
}

export default Home;

// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { useRouter } from 'next/router';
// import { useAuth } from '../utils/context/authContext';

// function Home() {
//   const { user } = useAuth();
//   const router = useRouter();

//   const redirectToOrders = () => {
//     router.push('/orders');
//   };

//   const redirectToCreateOrder = () => {
//     router.push('/new');
//   };

//   const redirectToRevenue = () => {
//     // Assuming you have a revenue route, replace '/revenue' with the correct path
//     router.push('/revenue');
//   };

//   return (
//     <div
//       className="text-center d-flex flex-column justify-content-center align-content-center"
//       style={{
//         height: '90vh',
//         padding: '30px',
//         maxWidth: '400px',
//         margin: '0 auto',
//       }}
//     >
//       <h1>Hello {user.fbUser.displayName}! </h1>
//       <Button variant="primary" type="button" size="lg" className="home-btn" onClick={redirectToOrders}>
//         View Orders
//       </Button>
//       <Button variant="success" type="button" size="lg" className="home-btn" onClick={redirectToCreateOrder}>
//         Create Order
//       </Button>
//       <Button variant="info" type="button" size="lg" className="home-btn" onClick={redirectToRevenue}>
//         View Revenue
//       </Button>
//     </div>
//   );
// }

// export default Home;
