import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    budget: 2000,
    items: [],
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
        }
    }
})

export const { addToItems } = budgetSlice.actions;
export default budgetSlice.reducer;