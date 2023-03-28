import React from "react";

const Todo = ({ todo, toggleTodo }) => {
    const todoHandleClick = () => {
        toggleTodo(todo.id);
    }
    
  return (
    <div className="todo">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={todoHandleClick}
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
