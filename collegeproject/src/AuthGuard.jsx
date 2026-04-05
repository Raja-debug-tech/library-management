import { useContext } from "react"
import Authcontext from "./Authcontext";
// import { useNavigate } from "react-router-dom";

const AuthGuard = ({children,allowedRoles}) => {

    const {isLog}=useContext(Authcontext);
    // const nav=useNavigate();
    if(!isLog&&!allowedRoles){
        return <Navigate to={'/'} replace/>
    }else{
        return children;
    }
    }
    export default AuthGuard;