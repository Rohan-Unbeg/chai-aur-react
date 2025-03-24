import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

//created a context
const TodoContext = createContext();

// custom hook to use Context
export const useTodo = () => useContext(TodoContext);

//context provider
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(
        // ✅ FIX: Initialize state from localStorage instead of updating it later
        () => {
            const storedTodos = JSON.parse(localStorage.getItem("todos"));
            return storedTodos || []; // If null, return empty array
        }
    );

    // load from localstorage
    // useEffect(() => {
    //     const storedTodos = JSON.parse(localStorage.getItem("todos"));
    //     if (storedTodos) setTodos(storedTodos);
    // }, []);
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storedTodos);
    }, []);

    //Save to local storage whenever todos chang
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // CRUD actions
    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    };

    const updateTodo = (id, newText) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <TodoContext.Provider
            value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}
        >
            {children}
        </TodoContext.Provider>
    );
};
