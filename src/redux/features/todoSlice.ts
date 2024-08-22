import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type TTodo ={
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
}

type TInitialState = {
    todos: TTodo[];
}

const initialState : TInitialState = {
    todos: [],
}

// slice create korte 3ta jinish lage. name, initialState, reducers
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // add function
        addTodo:(state, action: PayloadAction<TTodo>)=>{
            state.todos.push({...action.payload, isCompleted: false});
        },

        // remove todo
        removeTodo: (state, action : PayloadAction<string> ) => {
            state.todos = state.todos.filter( (item)=> item.id !== action.payload)
        },

        // for checkbox
        toggleComplete: (state, action:PayloadAction<string> ) =>{
            const task =  state.todos.find( (item)=> item.id === action.payload );
            task!.isCompleted = !task?.isCompleted;
            // ekhane undefined hobe na tai ei logics
        }

    },
});

export const {addTodo, removeTodo, toggleComplete} = todoSlice.actions;
export default todoSlice.reducer;