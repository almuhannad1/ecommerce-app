import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { CartContext } from '../../_context/CartContext';
import { useUser } from '@clerk/nextjs';
import CartApis from '../../_utils/CartApis';
import OrderApi from '../../_utils/OrderApis'

const CheckoutForm = ({ amount }) => {
    const { cart, setCart } = useContext(CartContext)
    const { user } = useUser()
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const handleError = (error) => {
            setLoading(false)
            setErrorMessage(error.message)
        }

        // Create new order
        createOrder()

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
            handleError(submitError);
            return;
        }

        const res = await fetch('api/create-intent', {
            method: "post",
            body: JSON.stringify({
                amount: amount
            })
        })

        const clientSecret = await res.json()

        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            clientSecret,
            elements,
            confirmParams: {
                return_url: `http://localhost:3000/payment-confirm?amount=${amount}`,
            },
        });

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    };

    const createOrder = () => {
        let productIds = [];
        cart.forEach(el => {
            productIds.push(el?.product?.id)
        })
        const data = {
            data: {
                email: user.primaryEmailAddress.emailAddress,
                username: user.fullName,
                amount,
                products: productIds
            }
        }
        OrderApi.createOrder(data).then((res) => {
            if (res) {
                cart.forEach(el => {
                    CartApis.deleteCartItem(el?.id).then(result => {

                    })
                })
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='mx-10 md:mx-[320px] sm:mx-2 mt-12'>
                <PaymentElement />
                <button className='bg-primary p-2 text-white rounded-md w-full mt-4'>Submit</button>
            </div>
        </form>
    );
};

export default CheckoutForm;