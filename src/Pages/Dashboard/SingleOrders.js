import React from 'react';

const SingleOrders = ({ tools, handleDelete, index }) => {
    const { _id, productName, customerName } = tools;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{customerName}</td>
            <td className='uppercase'>{productName}</td>

            <td>
                <button className="btn btn-sm btn-primary mr-2">Pending</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-primary">Cancel</button>
            </td>
        </tr>
    );
};

export default SingleOrders;