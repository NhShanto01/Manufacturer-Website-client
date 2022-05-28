import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data)
        const url = ' https://vast-plateau-50068.herokuapp.com/review';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Successfully added a review')
                event.target.reset();
            })
    };

    return (
        <section className='myReview py-16'>
            <u> <h3 className='text-xl font-paragraph font-bold text-center py-4 text-orange-400' >Add a Review</h3></u>
            <div className='container mx-auto flex justify-center items-center'>
                <form className='bg-slate-100 p-10 rounded-lg' onSubmit={handleSubmit(onSubmit)} >
                    <h3 className='text-xl font-paragraph font-bold text-orange-400 flex items-center'>Post A Review&nbsp;<FaArrowRight /></h3>

                    <label className="label">
                        <span className="label-text">Image Url</span>
                    </label>
                    <input type='text' placeholder='Url' className="w-96 input input-bordered"  {...register("img")} required />
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type='text' placeholder='Name' className="w-96 input input-bordered"  {...register("name")} required />
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input type='number' placeholder='Ratings' className="w-96 input input-bordered"  {...register("ratings", { max: 5 })} required />
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea type='text' placeholder='Message' className="w-96 input input-bordered"  {...register("description")} required />
                    <br />
                    <input type="submit" value='Post Review' className="btn w-full btn-primary capitalize text-xl mt-1" />

                </form>
            </div>
        </section>
    );
};

export default AddReview;