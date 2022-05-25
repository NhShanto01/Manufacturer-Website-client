import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>this is MyOrder</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Tools Name</th>
                            <th>Quantity</th>
                            <th>Payments</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{o.name}</td>
                                <td>{o.name}</td>
                                <td>{o.quantity}</td>
                                <td>
                                    {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}

                                    {(o.price && o.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{o.transactionId}</span></p>
                                    </div>}
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;