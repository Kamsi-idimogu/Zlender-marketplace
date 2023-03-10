import {createBrowserRouter, Navigate} from "react-router-dom";
import AboutPage from "../../Features/About/AboutPage";
import Login from "../../Features/Account/Login";
import Register from "../../Features/Account/Register";
import BasketPage from "../../Features/Basket/BasketPage";
import Catalog from "../../Features/Catalog/Catalog";
import ProductDetails from "../../Features/Catalog/ProductDetails";
import CheckoutPage from "../../Features/Checkout/CheckoutPage";
import ContactPage from "../../Features/Contact/ContactPage";
import HomePage from "../../Features/Home/HomePage";
import NotFound from "../Errors/NotFound";
import ServerError from "../Errors/ServerError";
import App from "../Layout/App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'catalog', element: <Catalog />},
            {path: 'catalog/:id', element: <ProductDetails />},
            {path: 'about', element: <AboutPage />},
            {path: 'contact', element: <ContactPage />},
            {path: 'server-error', element: <ServerError />},
            {path: 'not-found', element: <NotFound />},
            {path: 'basket', element: <BasketPage />},
            {path: 'checkout', element: <CheckoutPage />},
            {path: 'login', element: <Login />},
            {path: 'register', element: <Register />},
            {path: '*', element: <Navigate replace to='/not-found'/>},
        ]
    }
])