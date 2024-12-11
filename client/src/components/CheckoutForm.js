import React, { useState } from 'react';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const backendUrl = "pk_test_51QUlbKP9Chv36GHq2GdSy6qyYtslEs0YGSvAobhEvByYp8V7VtLf6ykrvbegAWBaFB2bexcTo0o11ka3lI2cbmoT00x3OUm501";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null || stripe == null) {
      return;
    }

    
    const { error: submitError } = await elements.submit();
    if (submitError?.message) {
     
      setErrorMessage(submitError.message);
      return;
    }

    const price = 12;

   
    const res = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'usd',
        email: emailInput,
        amount: price * 100,
        paymentMethodType: "card"
      }),
    });

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
    
      setErrorMessage(error.message);
    } else {
     
    }
  };

  return (
    <form onSubmit={handleSubmit} className='px-4'>
      <div className='mb-3'>
        <label htmlFor="email-input">Email</label>
        <div>
          <input value={emailInput} onChange={(e => setEmailInput(e.target.value))} type="email" id="email-input" placeholder='johndoe@gmail.com' />
        </div>
      </div>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
     
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};