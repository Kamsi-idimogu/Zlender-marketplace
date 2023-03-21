import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../Store/configureStore";

export default function RequireAuth(){
    const {user} = useAppSelector(state => state.account);
    const location = useLocation();

    //check if user is logged in
    if(!user){
        return <Navigate to='login' state={{from: location}}/>
    }

    return <Outlet />
}