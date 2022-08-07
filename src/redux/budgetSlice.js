import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    budget: 2000,
    items: [],
}

export const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {

    }
})

// export const { } = budgetSlice.actions;
export default budgetSlice.reducer;