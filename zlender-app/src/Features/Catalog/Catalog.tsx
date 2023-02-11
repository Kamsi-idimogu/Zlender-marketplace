import { Button } from "@mui/material";
import { Product } from "../../App/Models/product"
import ProductList from "./ProductList";

interface Props {
    products: Product[];
    addProduct: () => void; //a function that has no parameters and has a return type of void
}

export default function Catalog({products, addProduct}: Props){ //destructuring an object of type Props
    return(
        <>
            <ProductList products={products}/>
            <Button variant="contained" onClick={addProduct}>Add product</Button>
        </>
    )
}