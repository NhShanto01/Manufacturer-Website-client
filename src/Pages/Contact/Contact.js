import React from 'react';
import bg from '../../assets/img/dark-parts.jpg';

const Contact = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`,

        }}>
            <div class="w-11/12 lg:w-8/12 mx-auto">
                <div class="flex flex-col lg:flex-row p-10 gap-5 items-center">
                    <div class="text-center lg:text-right">
                        <h1 class="text-3xl font-bold text-white">Do you have Any <span class="text-primary">Question</span><br /> or<br /><span class="text-primary">information ?</span></h1>
                        <p class="py-6 font-semibold text-gray-400">You have any problem or you need any information message here. Our support team always help you 24h
                        </p>
                    </div>
                    <div class="card rounded lg:rounded-md flex-shrink-0 w-full max-w-md shadow-2xl glass">
                        <div class="card-body">
                            <form>
                                <div class="flex flex-col lg:flex-row gap-2 justify-between">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Your Name here" class="input input-bordered bg-white" name="name" />
                                        <label class="label"></label>
                                    </div>
                                    <div class="form-control"><label class="label"><span class="label-text">Phone</span>
                                    </label>
                                        <input type="number" placeholder="Your phone number" class="input input-bordered bg-white" name="phone" />
                                        <label class="label"></label>
                                    </div>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your email" class="input input-bordered bg-white" name="email" />
                                    <label class="label"></label>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Message</span>
                                    </label>
                                    <textarea class="textarea textarea-bordered bg-white" placeholder="Your message" name="message">
                                    </textarea>
                                    <label class="label"></label>
                                </div>
                                <div class="form-control mt-6">
                                    <button type="submit" class="btn block mx-auto btn-primary">Send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;