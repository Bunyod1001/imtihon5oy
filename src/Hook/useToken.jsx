import { useContext } from "react";
import { tokenContext } from "../components/Context/contextToken";

function useToken(){
    let {token , setToken} = useContext(tokenContext);

    return [token,setToken];
}


export default useToken;