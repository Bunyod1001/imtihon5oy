import { createSlice } from "@reduxjs/toolkit";



export const {actions: productAction, reducer: productReducer } = createSlice({
name:"product",
initialState:{
    product: localStorage.getItem("products") && JSON.parse(localStorage.getItem("products")),
},
reducers:{
    setProduct: (state, {payload}) => {
        // console.log(payload);
        state.product  = payload;
     
        localStorage.setItem("products", JSON.stringify(payload));
    },
},
})