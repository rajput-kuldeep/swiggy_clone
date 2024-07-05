
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Store/CartSlice"
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AppStore = configureStore({
    reducer :  {
        cart : CartReducer
    }
})

export default AppStore;

export const useAppDispatch : () => typeof AppStore.dispatch= useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof AppStore.getState>>=useSelector 