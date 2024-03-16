import { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import DateTimeDisplay from "./DateTimeDisplay";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Đi thi FER202", completed: true },
    { id: 2, text: "Thi xong thì về ngủ", completed: false },
    { id: 3, text: "Ngủ xong thì dậy ăn cơm", completed: false },
    { id: 4, text: "Ăn cơm xong lại đi ngủ", completed: false },
  ]);
  const [input, setInput] = useState("");

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <NavbarComponent />
      <div className="container">
        <h1 className="text-center my-3">Todo List Application</h1>
        <ul className="px-0">
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => handleToggle(todo.id)}
              className="mt-3 list-group-item d-flex justify-content-between align-items-center"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
              <button
                className="btn btn-outline-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(todo.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="input-group my-3 px-5">
          <input
            type="text"
            className="form-control"
            placeholder="Add todo item"
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" onClick={handleClick}>
              Add
            </button>
          </div>
        </div>
        <>
          <DateTimeDisplay />
        </>
      </div>
    </>
  );
};

export default TodoList;
