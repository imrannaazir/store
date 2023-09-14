import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import cartReducer from "./features/cartSlice";
import offCanvasReducer from "./features/offCanvasSlice";
import categoryReducer from "./features/categorySlice";

type RootState = {
  cart: ReturnType<typeof cartReducer>;
  modal: ReturnType<typeof modalReducer>;
  offCanvas: ReturnType<typeof offCanvasReducer>;
};

const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
  offCanvas: offCanvasReducer,
  category: categoryReducer,
});

export type { RootState };

export default rootReducer;
