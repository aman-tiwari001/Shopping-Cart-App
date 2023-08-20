import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart: false,
        totalPrice : 0
    },
    reducers: {
        addToCart: (state, actions) => {
            const newItem = actions.payload;
            const existingItem = state.itemList.find((oldItem) => oldItem.id === newItem.id);
            if (existingItem) { //if item is alreday existing in cart
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
                state.totalQuantity++;
            }
        },
        removeFromCart: (state, actions) => {
            const id = actions.payload;
            const itemToRemove = state.itemList.find((item) => item.id === id)
            if(itemToRemove.quantity === 1) {
                state.itemList = state.itemList.filter((item) => item.id !== id);
                state.totalQuantity--;
            }
            else {
                itemToRemove.quantity--;
                state.totalPrice -= itemToRemove.price
                itemToRemove.totalPrice -= itemToRemove.price;
            }
        },
        setShowCart : (state) => {
            state.showCart = !state.showCart
        },
        setTotalPrice : (state, actions) => {
            state.totalPrice = actions.payload.totalPrice;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;