import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order }) => {
    return (
        <tr>
            <th>{order.customerName}</th>
            <td className='uppercase'>{order.name}</td>
            <td><div className="avatar">
                <div className="w-20 rounded">
                    <img src={order.image} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>
                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-sm btn-primary mr-2">Pay</button></Link>}
                {(order.price && order.paid) && <span className="text-success">Paid</span>}
            </td>
            <td>
                <button className="btn btn-sm btn-primary">Cancel</button>
            </td>
        </tr>
    );
};

export default Order;