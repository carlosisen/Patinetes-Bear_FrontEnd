import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'; 
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "bootswatch/dist/lux/bootstrap.min.css";
import "../Components/Mapcomponents/Styles/payments.css";



const stripePromise = loadStripe(process.env.REACT_APP_CARD_KEY)

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })
        if (!error) {
            const {id} = paymentMethod
            const{data} = await axios.post ("http://localhost:3005/api/checkout", {
                id,
                amount: 20,
                currency:"€",
                description:"Recarga 10€",
            })
            console.log (data)
            elements.getElement(CardElement).clear();
        }
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <p className='text-center'>Saldo Actual 0€</p>     
        </div>
        <div className="form-group">
            <CardElement className="numberCard" />
            <button className="btn btn-outline-warning">
                Comprar
            </button>
        </div>
    </form>
}

const Payments = () => {

    return (
        <Elements stripe={stripePromise}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <CheckoutForm />
                    </div>
                </div>
            </div>
        </Elements>
    );
};

export default Payments;