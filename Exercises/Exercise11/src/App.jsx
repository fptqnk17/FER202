import React, { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

const App = () => {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completedToDo, setCompletedToDo] = useState([]);

  const handleAddToDo = () => {
    let newTodoItem = {
      title: title,
      description: description,
    };

    let updatedToDoArr = [...allTodos];
    updatedToDoArr.push(newTodoItem);
    setTodos(updatedToDoArr);
    localStorage.setItem("todos", JSON.stringify(updatedToDoArr));
  };

  const handleCompleteToDo = (index) => {
    const date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    var hh = date.getHours();
    var minutes = date.getMinutes();
    var ss = date.getSeconds();
    var finalDate =
      dd + "-" + mm + "-" + yyyy + " at " + hh + ":" + minutes + ":" + ss;

    let filteredTodo = {
      ...allTodos[index],
      completedOn: finalDate,
    };

    let updatedCompletedList = [...completedToDo, filteredTodo];
    console.log(updatedCompletedList);
    setCompletedToDo(updatedCompletedList);
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(updatedCompletedList)
    );
    handleDeleteToDo(index);

    localStorage.setItem("completedToDo", JSON.stringify(updatedCompletedList));
  };

  const handleDeleteToDo = (index) => {
    let reducedTodos = [...allTodos];
    reducedTodos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(reducedTodos));
    setTodos(reducedTodos);
  };

  const handleDeleteToDoCompleted = (index) => {
    let reducedTodos = [...completedToDo];
    reducedTodos.splice(index);
    localStorage.setItem("completedToDo", JSON.stringify(reducedTodos));
    setCompletedToDo(reducedTodos);
  };

  useEffect(() => {
    let savedTodos = localStorage.getItem("todos");
    let completedTodos = localStorage.getItem("completedToDo");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }

    if (completedTodos) {
      setCompletedToDo(JSON.parse(completedTodos));
    }
  }, []);

  return (
    <div className="App">
      <h1>BaKa ToDo List</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What's the task title?"
            />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What's the task description?"
            />
          </div>
          <div className="todo-input-item">
            <button
              type="button"
              onClick={handleAddToDo}
              className="primary-btn"
            >
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn  ${
              isCompleteScreen === false && "active"
            }`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn  ${isCompleteScreen === true && "active"}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
          {isCompleteScreen === false &&
            allTodos.map((item, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      className="delete-icon"
                      onClick={() => handleDeleteToDo(index)}
                    />
                    <BsCheckLg
                      className="check-icon"
                      onClick={() => handleCompleteToDo(index)}
                    />
                  </div>
                </div>
              );
            })}

          {isCompleteScreen === true &&
            completedToDo.map((item, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>
                      Completed on:{" "}
                      <span className="completed-date">{item.completedOn}</span>
                    </p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      className="delete-icon"
                      onClick={() => handleDeleteToDoCompleted(index)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
