import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Orders';


const MyOrder = () => {
    const [user] = useAuthState(auth);

    const [orders, setOrders] = useState([]);



    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
            })
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                })
        }


    }, [user]);
    console.log(orders);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>User Name</th>
                            <th>Product Name</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <Order
                                order={order}
                                key={order._id}
                                index={index}
                            ></Order>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;