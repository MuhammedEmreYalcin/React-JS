import React from "react";

function TodoForm({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.ceil(Math.random() * 1000),
        },
      ]);
    }
    setInputText("");
  };

  return (
    <div>
      <form className="todoForm">
        <input
          className="Todo-input"
          type="text"
          placeholder="Add a task here..."
          value={inputText}
          onChange={inputTextHandler}
        >
        </input>
        <button className="Todo-text" onClick={onClickHandler}>+</button>
      </form>
    </div>
  );
}

export default TodoForm;
