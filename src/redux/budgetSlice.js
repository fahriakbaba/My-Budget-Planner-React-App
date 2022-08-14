import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    budget: JSON.parse(localStorage.getItem("budget")) || 6600,
    items: JSON.parse(localStorage.getItem("items")) || [],
    total: 0,
    showBudget: true,
    themeMode: JSON.parse(localStorage.getItem("mode")) || false,
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
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        calculateTotalPrice: (state, action) => {
            state.total = state.items.reduce((acc, value) => {
                return acc + Number(value.price)
            }, 0);
        },
        changeMode: (state) => {
            state.themeMode = !state.themeMode;
            localStorage.setItem("mode", JSON.stringify(state.themeMode));
        },
        clickEdit: (state) => {
            state.showBudget = false;
        },
        saveBudget: (state, action) => {
            state.budget = Number(action.payload);
            state.showBudget = true;
            localStorage.setItem("budget", JSON.stringify(state.budget));
        }
    }
})

export const { addToItems, deleteItem, calculateTotalPrice, changeMode, clickEdit, saveBudget } = budgetSlice.actions;
export default budgetSlice.reducer;