import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurchaseItems = () => {
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();

        const profile = {
            email: user?.email,
            name: user?.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value,
            image: event.target.image.value,
            education: event.target.education.value,
        }
        console.log(profile);

        fetch('https://vast-plateau-50068.herokuapp.com/update', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();

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
                            <input className="pl-2 input input-bordered w-full max-w-xs" type="text" name="education" placeholder='Education Status' autoComplete='off' required />
                        </div>
                        <br />
                        <div className='form-control w-full max-w-xs'>
                            <input className="pl-2 input input-bordered w-full max-w-xs" type="text" name="image" placeholder='Image Url' autoComplete='off' required />
                        </div>
                        <br />
                        <div className='form-control w-full max-w-xs'>
                            <input className="pl-2 input input-bordered w-full max-w-xs" type="text" name="address" placeholder='Address' autoComplete='off' required />
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