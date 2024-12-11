import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
} from '@stripe/react-stripe-js';
import { CheckoutForm } from '../components/CheckoutForm'


const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const Checkout = (props) => {
  const stripePromise = loadStripe("pk_test_51QUlbKP9Chv36GHq2GdSy6qyYtslEs0YGSvAobhEvByYp8V7VtLf6ykrvbegAWBaFB2bexcTo0o11ka3lI2cbmoT00x3OUm501");
  
  
  return (
    <div className='flex container mt-8'>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}

export default Checkout