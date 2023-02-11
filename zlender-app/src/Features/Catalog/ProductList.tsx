import { List } from "@mui/material";
import { Product } from "../../App/Models/product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
}

export default function ProductList({products}: Props) {
    return (
        <List>
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
    </List>
    )

}