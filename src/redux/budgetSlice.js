import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    budget: 2000,
    items: JSON.parse(localStorage.getItem("items")) || [],
    total: 0,
}

export const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        addToItems: (state, action) => {
            const newItem = {
                id: Date.now().toString(),
                title: action.payload.title,
                price: action.payload.price,
            }
            state.items.push(newItem);
        },
        deleteItem: (state, action) => {
            state.items= state.items.filter(item => item.id !== action.payload)
        },
        calculateTotalPrice: (state, action) => {
            state.total = state.items.reduce((acc, value) => {
                return acc + Number(value.price)
            },0 );
        }
    }
})

export const { addToItems, deleteItem, calculateTotalPrice } = budgetSlice.actions;
export default budgetSlice.reducer;