import { useContext } from "react";
import { langContext } from "../components/Context/contextLang";

function useLang(){
    let { lang, setLang } = useContext(langContext);

    return [lang, setLang];
}


export default useLang;