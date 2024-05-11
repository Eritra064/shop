import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/slice"

const store = configureStore({
    reducer: {
        productReducer: productReducer
    }
})

export default store;