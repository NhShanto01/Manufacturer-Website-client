import React from 'react';
import { toast } from 'react-toastify';
import useTools from '../../hooks/useTools';
import SingleParts from './SingleParts';

const ManageProducts = () => {
    const [tools, setTools] = useTools();

    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure Want To Delate!!")
        if (proceed) {
            const url = `http://localhost:5000/delete/parts/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('hello', data))
            const updateService = tools.filter(service => service._id !== id);
            setTools(updateService);
            toast.success('Items Delate Successful')
        }
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    tools.map(tool => <SingleParts
                        key={tool._id}
                        tool={tool}
                        handleDelete={handleDelete}
                    ></SingleParts>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;