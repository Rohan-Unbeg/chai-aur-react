import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <form onSubmit={addTodoHandler} className="flex flex-col sm:flex-row gap-2 items-center justify-center p-4">
            <input
                type="text"
                placeholder="Enter a todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;