import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleAddItems = async e => {
        e.preventDefault();

        const purchase = {
            name: e.target.name.value,
            price: e.target.price.value,
            available: e.target.available.value,
            orderQuantity: e.target.orderQuantity.value,
            description: e.target.description.value,
            image: e.target.image.value
        }
        console.log(purchase);

        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
                toast.success('Product Added SuccessFully')
            });

    }
    return (
        <div className='w-1/2 mx-auto mt-10 mb-10'>
            <h1 className='text-3xl mb-5 font-bold'>Add To <span className='text-primary'>Item</span></h1>
            <form onSubmit={handleAddItems} className='w-full'>


                <div className='form-control w-full max-w-xs'>
                    <input className="pl-2 input input-bordered w-full max-w-xs" type="text" name="name" placeholder='name' required />
                </div>
                <br />
                <div className='form-control w-full max-w-xs'>
                    <input className="pl-2 input input-bordered " type="text" name="price" placeholder='price' required />
                </div>
                <br />
                <div className='form-control w-full max-w-xs'>
                    <input className="pl-2 input input-bordered w-full max-w-xs" type="text" name="available" placeholder='Available Quantity' required />
                </div>
                <br />
                <div className='form-control w-full max-w-xs'>
                    <input className="pl-2 input input-bordered w-full max-w-xs" type="text" name="orderQuantity" placeholder='Order Quantity' required />
                </div>
                <br />
                <div className='form-control w-full max-w-xs'>
                    <textarea name="description" className='pl-2 w-full max-w-xs' id="message" cols="10" rows="10" placeholder="Add Items Description" ></textarea>
                </div>
                <br />
                <div className='form-control w-full max-w-xs'>
                    <input className="pl-2 input input-bordered w-full max-w-xs" type="text" name="image" placeholder='image' required />
                </div>
                <br />

                <div className="card-actions justify-center">
                    <button className='btn btn-primary text-black'>Add Products</button>
                </div>

            </form>
        </div>
    );
};

export default AddProduct;