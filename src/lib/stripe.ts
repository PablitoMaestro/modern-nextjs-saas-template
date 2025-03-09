/**
 * Stripe client configuration
 * 
 * This file sets up and exports the Stripe client for payment processing.
 * It provides utility functions for payment-related operations.
 */
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with the public key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

/**
 * Redirects to Stripe Checkout for payment processing
 * @param priceId - The Stripe Price ID for the subscription or product
 */
export const redirectToCheckout = async (priceId: string) => {
  try {
    const stripe = await stripePromise;
    
    if (!stripe) {
      throw new Error('Stripe failed to initialize');
    }
    
    // Call your backend to create a checkout session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
      }),
    });
    
    const { sessionId } = await response.json();
    
    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId,
    });
    
    if (result.error) {
      console.error('Error redirecting to checkout:', result.error.message);
    }
  } catch (error) {
    console.error('Error in checkout process:', error);
  }
};

export { stripePromise }; 