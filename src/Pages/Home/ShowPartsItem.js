import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const ShowPartsItem = ({ tools }) => {
    // const navigate = useNavigate();
    const { _id, name, image, price, order, description, available } = tools;

    // const navigateToPurchase = id => {
    //     navigate(`/Parts/${id}`);
    // }

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
                    <div className="card-actions justify-center">
                        {/* <button
                            onClick={() => navigateToPurchase(_id)} className="btn btn-primary">Buy Now
                        </button> */}
                        <Link to="/purchase"
                            className="btn btn-primary">Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowPartsItem;