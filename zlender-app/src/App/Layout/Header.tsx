import { Switch, Typography } from "@mui/material";

interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props){

    return(
        <>
            <Typography variant='h1'>Hwllo</Typography>
            <Switch checked={darkMode} onChange={handleThemeChange}/>
        </>
    )
}