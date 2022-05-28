import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SingleOrders from './SingleOrders';


const ManageOrders = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allorder')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure Want To Delete!!")
        if (proceed) {
            const url = `http://localhost:5000/delete/order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('delete order', data))
            const updateService = tools.filter(tool => tool._id !== id);
            setTools(updateService);
            toast.success('Item Deleted')
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Product Name</th>
                            <th>Product Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tools, index) => <SingleOrders handleDelete={handleDelete}
                                index={index}
                                tools={tools}
                                key={index}
                            ></SingleOrders>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;