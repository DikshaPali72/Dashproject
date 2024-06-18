import React from 'react';
import camera from '../images/camera.png'
import dress from '../images/dress.png'
import oil from '../images/oil.png'
import deo from '../images/deo.png'

const orders = [
  { pic : <img src={camera}  />,trackingNo: '#876364', productName: 'Camera Lens', price: '$178', totalOrder: 325, totalAmount: '$146,660' },
  { pic : <img src={dress}  />, trackingNo: '#876368', productName: 'Black Sleep Dress', price: '$14', totalOrder: 53, totalAmount: '$46,660' },
  { pic : <img src={oil}  />, trackingNo: '#876412', productName: 'Argan Oil', price: '$21', totalOrder: 78, totalAmount: '$3,46,676' },
  { pic : <img src={deo}  />, trackingNo: '#876621', productName: 'EAU DE Parfum', price: '$32', totalOrder: 98, totalAmount: '$3,46,981' },
];

const RecentOrders = () => (
  <div className="bg-white p-3 rounded-lg shadow">
    <h2 className="text-xl font-bold mb-2">Recent Orders</h2>
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Tracking no</th>
          <th className="py-2">Product Name</th>
          <th className="py-2">Price</th>
          <th className="py-2">Total Order</th>
          <th className="py-2">Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.trackingNo}>
            <td className="border px-4 py-1">{order.trackingNo}</td>
            <td className="border px-4 py-1 flex "><span className=' mr-2'>{order.pic} </span>{order.productName}</td>
            <td className="border px-4 py-1">{order.price}</td>
            <td className="border px-4 py-1">{order.totalOrder}</td>
            <td className="border px-4 py-1">{order.totalAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecentOrders;
