import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { deleteOrder } from '../utils/data/orderData';

export default function OrderCard({ orderObj, onUpdate }) {
  const router = useRouter();

  const deleteThisOrder = () => {
    if (window.confirm('Delete this order?')) {
      deleteOrder(orderObj.id).then(() => onUpdate());
    }
  };

  return (
    <>
      <div className="order-cards-container">
        <Card className="text-center order-card" style={{ width: '25rem', margin: 20, backgroundColor: '#B9B5B5' }}>
          {/* Add 'backgroundColor' to set the background color to light gray */}
          {/* <Card.Header><b>Order #{orderObj.id}</b></Card.Header> */}
          <Card.Body>
            <Card.Title><b>Order Name: {orderObj.name}</b></Card.Title>
            <Card.Text><b>Status:</b> {orderObj.open ? 'Open ✔️' : 'Closed ❌'}</Card.Text>
            <Card.Text><b>Phone:</b> {orderObj.phone}</Card.Text>
            <Card.Text><b>Email:</b> {orderObj.email}</Card.Text>
            <Card.Text><b>Order Type:</b> {orderObj.type}</Card.Text>
            <Link href={`/orders/${orderObj.id}`} passHref>
              <Button variant="success" as="a">Details</Button>
            </Link>
            <Button
              variant="primary"
              onClick={() => {
                router.push(`/orders/edit/${orderObj.id}`);
              }}
            >Edit
            </Button>
            <Button variant="info" onClick={deleteThisOrder}>Delete</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

// import PropTypes from 'prop-types';
// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { deleteOrder } from '../utils/data/orderData';

// export default function OrderCard({ orderObj, onUpdate }) {
//   const router = useRouter();

//   const deleteThisOrder = () => {
//     if (window.confirm('Delete this order?')) {
//       deleteOrder(orderObj.id).then(() => onUpdate());
//     }
//   };

//   return (
//     <>
//       <div className="order-cards-container">
//         <Card className="text-center order-card" style={{ width: '25rem', margin: 20 }}>
//           <Card.Header><b>Order #{orderObj.id}</b></Card.Header>
//           <Card.Body>
//             <Card.Title><b>Order Name: {orderObj.name}</b></Card.Title>
//             <Card.Text><b>Status:</b> {orderObj.open ? 'Open ✔️' : 'Closed ❌'}</Card.Text>
//             <Card.Text><b>Phone:</b> {orderObj.phone}</Card.Text>
//             <Card.Text><b>Email:</b> {orderObj.email}</Card.Text>
//             <Card.Text><b>Order Type:</b> {orderObj.type}</Card.Text>
//             <Link href={`/orders/${orderObj.id}`} passHref>
//               <Button variant="success" as="a">Details</Button>
//             </Link>
//             <Button
//               variant="primary"
//               onClick={() => {
//                 router.push(`/orders/edit/${orderObj.id}`);
//               }}
//             >Edit
//             </Button>
//             <Button variant="info" onClick={deleteThisOrder}>Delete</Button>
//           </Card.Body>
//         </Card>
//       </div>
//     </>
//   );
// }

// OrderCard.propTypes = {
//   orderObj: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     open: PropTypes.bool.isRequired,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };
