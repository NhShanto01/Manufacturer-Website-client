import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchaseItems = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const { tools, setTools } = useState([]);
    const navigate = useNavigate()
    // console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [id])

    const handlePlaceOrder = event => {
        event.preventDefault();

        const purchase = {
            // productName: tools.name,
            customer: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value,
            // price: tools.price,
            Address: event.target.Address.value
        }
        console.log(purchase);

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/dashboard/myorder')
                event.target.reset();
                toast.success('Order Successfully')
            });
    }

    return (
        <div className='flex h-screen justify-around items-center'>

            <div className='card w-96 bg-base-100 shadow-xl'>
                <div className='card-body text-2xl '>


                    <form onSubmit={handlePlaceOrder}>

                        <div className='form-control w-full max-w-xs'>
                            <input className="pl-2 input input-bordered w-full max-w-xs" type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                        </div>
                        <br />
                        <div className='form-control w-full max-w-xs'>
                            <input className="pl-2 input input-bordered w-full max-w-xs" type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                            <br />
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <input className="pl-2 input input-bordered w-full max-w-xs" type="text" value={tools?.name} name="toolsName" placeholder='Tools Name' autoComplete='off' required readOnly disabled />
                        </div>
                        <br />
                        <div className='form-control w-full max-w-xs'>
                            <input className="pl-2 input input-bordered w-full max-w-xs" type="text" name="Address" placeholder='Address' autoComplete='off' required />
                        </div>
                        <br />
                        <div className='form-control w-full max-w-xs'>
                            <input className="pl-2 input input-bordered w-full max-w-xs" type="text" name="phone" placeholder='phone' required />
                        </div>
                        <br />
                        <div className="card-actions justify-center">
                            <button className='btn btn-primary text-black'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseItems;