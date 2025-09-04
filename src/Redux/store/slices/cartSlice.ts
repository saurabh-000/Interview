import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number};

type State = {
  items: Record<string, CartItem>;
};

const initialState: State = {items: {}};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{id: string; name: string; price: number}>) => {
      const {id, name, price} = action.payload;
      const existing = state.items[id];
      if (existing) existing.qty += 1; else state.items[id] = {id, name, price, qty: 1};
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
    },
    decrement: (state, action: PayloadAction<string>) => {
      const it = state.items[action.payload];
      if (!it) return; it.qty -= 1; if (it.qty <= 0) delete state.items[action.payload];
    },
    clearCart: (state) => { state.items = {}; },
  }
});

export const {addToCart, removeFromCart, decrement, clearCart} = cartSlice.actions;
export default cartSlice.reducer;