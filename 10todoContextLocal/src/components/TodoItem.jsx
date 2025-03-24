import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo, updateTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (!newText.trim()) return;
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-3 rounded-lg">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          autoFocus
          className="bg-gray-700 p-1 rounded text-white"
        />
      ) : (
        <span
          className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2">
        {!isEditing && (
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2 rounded">
            Edit
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white p-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
