import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import agent from "../../App/Api/agent";
import LoadingComponent from "../../App/Layout/LoadingComponent";
import { useAppDispatch } from "../../App/Store/configureStore";
import { setBasket } from "../Basket/basketSlice";
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe('pk_test_51MrQJzDq8wAGEaQAwvrFHexehnTZ5wgqIbWrDwaiI9gJFimqPtkqvmCryjt9AGWpYVeMtGwKMMH5f5rVLCxmeGSt00nwkKirBS')

export default function CheckoutWrapper() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Payments.createPaymentIntent()
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [dispatch]);

    if (loading) return <LoadingComponent message="Loading checkout..."/>

    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage/>
        </Elements>
    )
}