import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'bookCartData',
   initialState: [],
    reducers: {
        addToCart: (state, action) => {
          const { id } = action.payload;
          const existingItem = state.find(item => item.id === id);
    
          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            state.push({ ...action.payload, quantity: 1 });
          }
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const itemIndex = state.findIndex(item => item.id === itemId);
      
            if (itemIndex !== -1) {
             // state.splice(itemIndex, 1);
             if (state[itemIndex].quantity === 1) {
              state.splice(itemIndex, 1);
            } else {
              state[itemIndex].quantity -= 1;
            }
            }
          },
        clearCart: state => {
            state.splice(0);
          }
      }
})

export const { addToCart,removeFromCart, clearCart } = slice.actions

export default slice.reducer
