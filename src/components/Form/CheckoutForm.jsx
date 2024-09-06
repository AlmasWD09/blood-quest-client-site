


import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import "./CheckoutForm.css"
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';


const CheckoutForm = ({ onClose, amount, setIsOpen, refetch}) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState();
  const [curdError, setCrudError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosSecure.post('/create-payment-intent', { amount: amount });

      setClientSecret(data?.clientSecret);
    };
    fetchData();
  }, [amount, axiosSecure]);



  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCrudError(error.message)
      return
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setCrudError('')
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName,
          email: user?.email
        }
      }
    });
    if (confirmError) {
      setCrudError(confirmError.message)
      return
    }
    if (paymentIntent.status === 'succeeded') {
      toast.success("Your send donation successfully");

      const fund = {
        name: user?.displayName,
        email: user?.email,
        transitionId : paymentIntent.id,
        amount: amount,
        date: new Date()
      };

      const { data } = await axiosSecure.post('/fund/related/api/create', fund);
      if (data?.insertedId) {
        setIsOpen(false);
        refetch();
      }


    }
};
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

      {/* modal button here.. */}
      <div className='flex mt-2 justify-between gap-5'>
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 
          ${!stripe || !clientSecret ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-red-600 text-white hover:bg-red-700'}`}>
          Confirm
        </button>
        
        <button
          type='button'
          className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
          onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
    {curdError && <small className='text-red-400'>{curdError}</small>}
  </>
);
};

export default CheckoutForm;