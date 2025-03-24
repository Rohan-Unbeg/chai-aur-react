import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editId, setEditId] = React.useState(null);
    const [editText, setEditText] = React.useState("");

    const handleEdit = (todo) => {
        setEditId(todo.id);
        setEditText(todo.text);
    };

    const handleUpdate = (id) => {
        if (!editText.trim()) return;
        dispatch(updateTodo({ id, text: editText }));
        setEditId(null);
        setEditText("");
    };

    return (
        <ul className="p-4 max-w-md mx-auto space-y-3">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="flex items-center justify-between bg-white p-3 rounded-xl shadow-md border border-gray-200"
                >
                    {editId === todo.id ? (
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="w-full p-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    ) : (
                        <span className="text-gray-800 text-lg font-medium">
                            {todo.text}
                        </span>
                    )}

                    <div className="flex items-center space-x-2">
                        {editId === todo.id ? (
                            <button
                                onClick={() => handleUpdate(todo.id)}
                                className="bg-green-500 text-white px-2 py-1 rounded-lg shadow hover:bg-green-600 transition"
                            >
                                ✅
                            </button>
                        ) : (
                            <button
                                onClick={() => handleEdit(todo)}
                                className="bg-blue-500 text-white px-2 py-1 rounded-lg shadow hover:bg-blue-600 transition"
                            >
                                ✏
                            </button>
                        )}

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 text-white px-2 py-1 rounded-lg shadow hover:bg-red-600 transition"
                        >
                            ❌
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Todos;
