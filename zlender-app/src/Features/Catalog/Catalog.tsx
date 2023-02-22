import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import agent from "../../App/Api/agent";
import { Product } from "../../App/Models/product"
import ProductList from "./ProductList";

export default function Catalog(){ 
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      agent.Catalog.list().then(products => setProducts(products))
    }, []);
    
    return(
        <>
            <ProductList products={products}/>
        </>
    )
}