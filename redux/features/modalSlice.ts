import { Product } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreviewModalState {
  isOpen: boolean;
  data: Product | null;
}

const initialState: PreviewModalState = {
  isOpen: false,
  data: null,
};

const previewModalSlice = createSlice({
  name: "previewModal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Product>) => {
      state.isOpen = true;
      state.data = action.payload;
      console.log(state);
    },

    closeModal: (state) => {
      state.isOpen = false;
      state.data = null;
    },
  },
});

export const { openModal, closeModal } = previewModalSlice.actions;
export default previewModalSlice.reducer;
