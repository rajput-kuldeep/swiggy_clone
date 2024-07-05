import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ItemCardsEntity} from "@/data/data";

interface CartState {
    items: ItemCardsEntity[];
  }

  const initialState: CartState = {
    items: [],
  };

const CartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addItem : (state, action : PayloadAction<ItemCardsEntity>) => {
            state.items.push(action.payload)
        },
        removeItem : (state) => {
            state.items.pop()
        },
        clearCart : (state) => {
            state.items.length = 0
        }
    }
})

export const {addItem, removeItem, clearCart} = CartSlice.actions

export default CartSlice.reducer