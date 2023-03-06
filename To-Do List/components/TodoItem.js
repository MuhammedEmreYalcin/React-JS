import React from "react";
import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import "./TodoItem.css";

function TodoItem({ text, todos, setTodos, todo }) {
  const deleteHandler = () => {
    setTodos(todos.filter((del) => del.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <p className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</p>

      <button onClick={completeHandler} className="complete-btn">
        <AiOutlineCheck />
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <AiFillDelete />
      </button>
    </div>
  );
}

export default TodoItem;
