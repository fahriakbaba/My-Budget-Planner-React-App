import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    budget: 2000,
    items: JSON.parse(localStorage.getItem("items")) || [],
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
        }
    }
})

export const { addToItems, deleteItem } = budgetSlice.actions;
export default budgetSlice.reducer;