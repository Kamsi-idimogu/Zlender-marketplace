import { Product } from "../../App/Models/product"

interface Props {
    products: Product[];
    addProduct: () => void; //a function that has no parameters and has a return type of void
}

export default function Catalog({products, addProduct}: Props){ //destructuring an object of type Props
    return(
        <h1></h1>
    )
}