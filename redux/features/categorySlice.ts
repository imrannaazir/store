import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MenuItem {
  href: string;
  isActive: boolean;
  icon: string;
  label: string;
}

const initialState: MenuItem[] = [];

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategories: (state, action: PayloadAction<MenuItem[]>) => {
      console.log(action.payload, "action.payload");

      state = action.payload;
      console.log(state, "state");
    },
  },
});

export default categorySlice.reducer;
export const { addCategories } = categorySlice.actions;
