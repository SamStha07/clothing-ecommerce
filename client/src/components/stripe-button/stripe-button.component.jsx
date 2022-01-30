import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { instance as axios } from 'src/api';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HHWdJJ7pnChVHWcfmOzN3c4dXCNV311F3NownTrG3VK22XKfvQUxCcImfgJihxpWD8GZfcdxxifcYLDKQqIDIFs00E8NKMWJs';

  const onToken = (token) => {
    console.log(token);
    axios
      .post('/payment', {
        amount: priceForStripe,
        token: token.id,
      })
      .then((res) => {
        alert('Payment successful');
      })
      .catch((err) => {
        console.log('Payment error', JSON.parse(err));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Ecommerce'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
