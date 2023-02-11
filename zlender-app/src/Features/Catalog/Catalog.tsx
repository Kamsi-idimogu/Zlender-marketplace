import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../App/Models/product"

interface Props {
    products: Product[];
    addProduct: () => void; //a function that has no parameters and has a return type of void
}

export default function Catalog({products, addProduct}: Props){ //destructuring an object of type Props
    return(
        <>
            <List>
                {products.map(product => (
                    <ListItem key={product.id}> 
                        <ListItemAvatar>
                            <Avatar src={product.pictureUrl}/>
                        </ListItemAvatar>
                        <ListItemText>
                            {product.name} - {product.price}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" onClick={addProduct}>Add product</Button>
        </>
    )
}