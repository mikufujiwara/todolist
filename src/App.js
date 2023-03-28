import "./App.css";
import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const addTodoHandler = () => {
    console.log(todoNameRef.current.value);
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const clearHandler = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <section>
      <h1>To do List App</h1>
      <input type="text" ref={todoNameRef} placeholder="ex) Clean the kitchen" />
      <aside>
        <button onClick={addTodoHandler}>Add Task</button>
        <button onClick={clearHandler}>Remove completed Task</button>
      </aside>
      <h3>Task remaining:{todos.filter((todo) => !todo.completed).length}</h3>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </section>
  );
}

export default App;
