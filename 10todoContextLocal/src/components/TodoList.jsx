import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../context/TodoContext";

function TodoList() {
    const { todos } = useTodo();
    return (
        <div className="space-y-2">
            {todos.length === 0 ? (
                <p className="text-gray-500 text-center">No todos yet.</p>
            ) : (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
        </div>
    );
}

export default TodoList;
