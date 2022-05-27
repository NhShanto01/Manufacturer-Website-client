import React from 'react';

const SingleParts = ({ tool, handleDelete }) => {
    const { _id, name, image, available, price, order, description } = tool;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="Parts" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Order Quantity : {order} (minimum)</p>
                    <p>Available Quantity : {available}</p>
                    <p>Price : {price} (per unite)</p>
                    <p>{description}</p>

                    <div className="card-actions">
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleParts;