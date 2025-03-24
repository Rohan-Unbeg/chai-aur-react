import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

function App() {
    return (
      <TodoProvider>
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
          <TodoForm />
          <TodoList/>
        </div>
      </div>
    </TodoProvider>
    );
}

export default App;
