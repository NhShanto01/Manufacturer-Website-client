import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order, index }) => {
    const { price } = order;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{order.customerName}</td>
            <td className='uppercase'>{order.productName}</td>
            <td>
                {price}
            </td>
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