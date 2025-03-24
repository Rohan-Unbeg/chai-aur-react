import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
    const {addTodo} = useTodo();
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText("");
    };
    return (
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-grow p-2 border rounded text-black"
                placeholder="Add a todo..."
            />
            <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded text-white"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
