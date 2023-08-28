import { Product as ProductType } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

interface InitialState {
  items: ProductType[];
}

const initialState: InitialState = {
  items: [],
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addItem: (state, action: PayloadAction<ProductType>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        toast.error("Item already in the cart");
      }
      state.items.push(action.payload);
      toast.success("Item added to the cart.");
    },

    removeItem: (state, action: PayloadAction<ProductType>) => {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = filteredItems;
      toast.success("Item Remove from the cart.");
    },

    removeAll: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeAll, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
