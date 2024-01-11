import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"
const store = configureStore({
    reducer: {
        userReducer
    }
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export { store }