import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
}

// slice create korte 3ta jinish lage. name, initialState, reducers
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
});

export default todoSlice.reducer;