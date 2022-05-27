import React from 'react';

const SingleOrders = ({ tools, handleDelete }) => {
    const { _id, productName, image, displayName } = tools;
    return (
        <tr>
            <td>{displayName}</td>
            <td className='uppercase'>{tools?.name}</td>
            <td>
                <div className="avatar">
                    <div className="w-20 rounded">
                        <img src={tools.image} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>
                <button className="btn btn-sm btn-primary mr-2">Pay</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-primary">Cancel</button>
            </td>
        </tr>
    );
};

export default SingleOrders;