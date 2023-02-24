import { LoadingButton } from "@mui/lab";
import { CardHeader,  Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../App/Api/agent";
import { UseStoreContext } from "../../App/Context/StoreContext";
import { Product } from "../../App/Models/product";
import { useAppDispatch } from "../../App/Store/configureStore";
import { currencyFormat } from "../../App/Util/util";
import { setBasket } from "../Basket/basketSlice";

interface Props{
    product: Product;
}

export default function ProductCard({product} : Props){ //destructuring an object of type Props
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    function handleAddItem(productId: number){
        setLoading(true);
        agent.Basket.addItem(productId)
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main', }
                }}
            />
            <CardMedia
            sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light'}}
            image={product.pictureUrl}
            title={product.name}
            />
            <CardContent>
            <Typography gutterBottom color= 'secondary' variant="h5" component="div">
                {currencyFormat(product.price)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.brand} / {product.type}
            </Typography>
            </CardContent>
            <CardActions>
            <LoadingButton loading={loading} onClick={() => handleAddItem(product.id)} size="small">Add to Cart</LoadingButton>
            <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
            </CardActions>
      </Card>
    )
}