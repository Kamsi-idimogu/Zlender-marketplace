import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../Features/Account/accountSlice";
import { clearBasket } from "../../Features/Basket/basketSlice";
import { useAppDispatch, useAppSelector } from "../Store/configureStore";

export default function SignedInMenu() {
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.account);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <Button 
            color="inherit"
            onClick={handleClick}
            sx={{typography: "h6"}}
            >
            {user?.email}
        </Button>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem component={Link} to='/orders'>My orders</MenuItem>
            <MenuItem onClick={() => {
                dispatch(signOut())
                dispatch(clearBasket());
                }}>Logout</MenuItem>
        </Menu>
        </>
    );
}