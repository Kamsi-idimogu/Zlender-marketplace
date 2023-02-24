import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../App/Store/configureStore";
import { increment } from "./counterSlice";

export default function ContactPage(){
    const dispatch = useAppDispatch();
    const {data, title} = useAppSelector(state => state.counter)

    return (
        <>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h5">
                The data is: {data}
            </Typography>
            <ButtonGroup>
                <Button onClick={() => dispatch(increment(1))} variant='contained' color="error">Increment</Button>
            </ButtonGroup>
        </>
    )
}