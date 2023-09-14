import { MenuItem } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isOpen: boolean;
  data: MenuItem[];
}

const initialState: InitialState = {
  isOpen: false,
  data: [],
};

const offCanvasSlice = createSlice({
  initialState,
  name: "offCanvas",
  reducers: {
    onChange: (state) => {
      state.isOpen = !state.isOpen;
    },
    onAddCategories: (state, action: PayloadAction<MenuItem[]>) => {
      state.data = action.payload;
    },
  },
});

export default offCanvasSlice.reducer;
export const { onChange, onAddCategories } = offCanvasSlice.actions;
