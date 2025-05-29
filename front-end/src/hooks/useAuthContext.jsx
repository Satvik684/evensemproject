import { useContext } from "react";
import { AuthContext } from "../store/authContext";


export const useAuthContext = () =>{
    const context = useContext(AuthContext);

    if(!context){
        throw Error('us this inside the provider!');
    }

    return context;
}