import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
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

    const handleCancel = id => {
        const proceed = window.confirm("Are You Sure Want To Delete!!")
        if (proceed) {
            const url = `http://localhost:5000/delete/order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('delete order', data))
            const updateService = orders.filter(tool => tool._id !== id);
            setOrders(updateService);
            toast.success('Item Deleted')
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>User Name</th>
                            <th>Product Name</th>
                            <th>Price </th>
                            <th>Payment</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <Order
                                order={order}
                                key={order._id}
                                index={index}
                                handleCancel={handleCancel}
                            ></Order>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;