import "./App.css";
import InputField from "./components/InputField";
import { useState } from "react";
import Todo from "./types";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<Todo[]>([]); // array of objects
  const [comletedTodos, setCompletedTodos] = useState<Todo[]>([]);

  function getInputText(text: string) {
    const updatedArray: Todo = {
      text: text,
      id: Math.random(),
      isDone: false,
    };
    setTodo((prev) => [...prev, updatedArray]);
  }

  function doneFunction(id: number) {
    const newArray = todo.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    const activeTodos = newArray.filter((todo) => !todo.isDone);
    const completed = newArray.filter((todo) => todo.isDone);
    setTodo(activeTodos);
    setCompletedTodos((prev) => [...prev, ...completed]);
  }

  function editTaskFunction(id: number, newText: string) {
    const newArray = todo.map((tod) =>
      tod.id === id ? { ...tod, text: newText } : tod
    );
  }

  function deleteTaskFuntcion(id: number) {
    const newArray = todo.filter((todo) => todo.id !== id);
    setTodo(newArray);

    const newArrayCompleted = comletedTodos.filter((todo) => todo.id !== id);
    setCompletedTodos(newArrayCompleted);
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField getText={getInputText} />
      <TodoList
        todos={todo}
        onDone={doneFunction}
        onEdit={editTaskFunction}
        complited={comletedTodos}
        onDelete={deleteTaskFuntcion}
      />
    </div>
  );
}

export default App;
