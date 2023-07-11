import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
  items: Items;
}

const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state: InitialStateType, action) {
      state.items = action.payload;
    },
    addToCart(state: InitialStateType, action) {
      const findItem = state.items.find(
        (obj) => Number(obj.id) === Number(action.payload)
      );
      if (findItem) {
        if (findItem.count) {
          findItem.count++;
        } else {
          findItem.count = 1;
        }
      }
    },
    minusFromCart(state: InitialStateType, action) {
      const findItem = state.items.find(
        (obj) => Number(obj.id) === Number(action.payload)
      );
      if (findItem?.count) {
        findItem.count--;
      }
    },
    removeFromCart(state: InitialStateType, action) {
      const findItem = state.items.find(
        (obj) => Number(obj.id) === Number(action.payload)
      );
      if (findItem) {
        findItem.count = 0;
      }
    },
  },
});

export const { setItems, addToCart, minusFromCart, removeFromCart } =
  itemsSlice.actions;
export default itemsSlice.reducer;
