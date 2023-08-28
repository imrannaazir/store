import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import cartReducer from "./features/cartSlice";

type RootState = {
  cart: ReturnType<typeof cartReducer>;
  modal: ReturnType<typeof modalReducer>;
};

const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
});

export type { RootState };

export default rootReducer;
