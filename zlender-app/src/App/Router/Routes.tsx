import {createBrowserRouter} from "react-router-dom";
import AboutPage from "../../Features/About/AboutPage";
import Catalog from "../../Features/Catalog/Catalog";
import ProductDetails from "../../Features/Catalog/ProductDetails";
import ContactPage from "../../Features/Contact/ContactPage";
import HomePage from "../../Features/Home/HomePage";
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
        ]
    }
])