import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useTools from '../../hooks/useTools';

const PurchaseItems = () => {
    const [tools] = useTools();
    const { id } = useParams();
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();

        const order = {
            email: user.email,
            tools: tools.name,
            toolsId: id,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <div className='card-body text-2xl '>
                    <h2 className='font-bold'>Please Order : {tools.name}</h2>

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