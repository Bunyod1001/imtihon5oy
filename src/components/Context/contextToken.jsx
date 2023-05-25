import { createContext, useEffect, useState } from "react";



let tokenContext = createContext();

function TokenProvider({children}){
    let [token, setToken] = useState(
       JSON.parse( window.localStorage.getItem("example_token")) || false
    );
    useEffect(() => {
        window.localStorage.setItem("example_token", JSON.stringify(token));
    }, [token]);
    return (
        <>
        <tokenContext.Provider value={{token, setToken}}>
           {children}
        </tokenContext.Provider>
        </>
    );
}


export { tokenContext, TokenProvider};