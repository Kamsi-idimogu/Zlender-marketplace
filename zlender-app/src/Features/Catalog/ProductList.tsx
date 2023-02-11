import { Grid } from "@mui/material";
import { Product } from "../../App/Models/product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
}

export default function ProductList({products}: Props) { //destructuring an object of type Props
    return (
        <Grid container spacing={4}>
        {products.map(product => (
            <Grid item xs={4} key={product.id}> 
                <ProductCard  product={product} />
            </Grid>
        ))}
        </Grid>
    )

}