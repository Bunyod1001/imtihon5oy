import { createContext, useEffect, useState } from "react";



let langContext = createContext();

function LangProvider({children}){
    let [lang, setLang] = useState(
        window.localStorage.getItem("syte_lang") || "uz"
    );
    useEffect(() => {
        window.localStorage.setItem("syte_lang", lang);
    }, [lang]);
    return (
        <>
        <langContext.Provider value={{lang, setLang}}>
           {children}
        </langContext.Provider>
        </>
    );
}


export { langContext, LangProvider};