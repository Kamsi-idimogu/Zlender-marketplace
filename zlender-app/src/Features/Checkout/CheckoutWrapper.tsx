import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe('pk_test_51MrQJzDq8wAGEaQAwvrFHexehnTZ5wgqIbWrDwaiI9gJFimqPtkqvmCryjt9AGWpYVeMtGwKMMH5f5rVLCxmeGSt00nwkKirBS')

export default function CheckoutWrapper() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage/>
        </Elements>
    )
}