import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    //this is state
    todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // this is a syntax, you have access to the state and action
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id != action.payload
            );
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map((todo) =>
                todo.id === id ? { ...todo, text: text } : todo
            );
        },
    },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
