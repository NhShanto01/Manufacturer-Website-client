import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cError, setCError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');


    const { price, email, customerName } = order;

    useEffect(() => {
        const url = 'https://vast-plateau-50068.herokuapp.com/create-payment-intent'
        console.log(url);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                // if (data?.clientSecret) {
                //     setClientSecret(data?.clientSecret)
                // }
                console.log(data);
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        setCError(error?.message || '');
        setSuccess('');

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCError(intentError?.message)
        }
        else {
            setCError('')
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-5' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cError && <p className='text-red-500'>{cError}</p>
            }
            {
                success && <p className='text-green-500'>{success}</p>
            }
        </>
    );
};

export default CheckoutForm;