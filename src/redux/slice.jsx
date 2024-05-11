import { createSlice } from "@reduxjs/toolkit";
import Products from "../components/Products.jsx";

const initialState = Products;


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsReducer: (state, action) => {

        }
    }
})

export default productSlice.reducer;