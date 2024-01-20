import React, { useEffect, useState } from 'react';
import OrderCard from '../../components/OrderCard';
import { getOrders } from '../../utils/data/orderData';

function Orders() {
  const [orders, setOrders] = useState([]);

  const getAllOrders = () => {
    getOrders().then((data) => setOrders(data));
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div style={{
      display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start',
    }}
    >
      <article className="orders" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {orders.map((order) => (
          <section key={`order--${order.id}`} style={{ margin: '10px' }}>
            <OrderCard orderObj={order} onUpdate={getAllOrders} />
          </section>
        ))}
      </article>
    </div>
  );
}

export default Orders;
