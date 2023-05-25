import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./Pages/Home";
import { productAction } from "./store/products/products.slice";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Add from "./Pages/Add";
import Login from "./Pages/Login";
import Private from "./Routes/Private";
import Publick from "./Routes/Publick";
import Admin from "./components/Admin/Admin";
import Statics from "./Pages/Statics";
import { useTranslation } from "react-i18next";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch(productAction.setProduct(json));
      });
  }, []);

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Publick />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/product" element={<Product />} />
          <Route path="/add" element={<Add />} />
          <Route path="/login" element={<Login />} />
          <Route path="/statics" element={<Statics />} />
        </Route>
        <Route path="/" element={<Private />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
