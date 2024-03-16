import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/TodoList.css";
import DateTime from "./DateTime";
import SquareAreaCalculator from "./AreaSquare";

const TodoList = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [deletedTasks, setDeletedTasks] = useState(
    JSON.parse(localStorage.getItem("deletedTasks")) || []
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activeTab, setActiveTab] = useState("In progress");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  }, [tasks, deletedTasks]);

  const addTask = () => {
    const newTask = {
      title,
      description,
      completed: false,
      dateTime: new Date(),
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
    setDeletedTasks([...deletedTasks, task]);
  };

  const markTaskAsCompleted = (task) => {
    setTasks(
      tasks.map((t) => (t === task ? { ...t, completed: !t.completed } : t))
    );
  };

  const deletePermanently = (task) => {
    setDeletedTasks(deletedTasks.filter((t) => t !== task));
  };

  return (
    <div className="todo-list">
     <Link to="/square-area-calculator" className="goto">Go to Square Area Calculator</Link>
      <div className="add-task">
        <h1>TodoList</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list-task">
        <h2>List Tasks</h2>
        <div>
          <button onClick={() => setActiveTab("In progress")}>
            In progress
          </button>
          <button onClick={() => setActiveTab("Completed")}>Completed</button>
          <button onClick={() => setActiveTab("Deleted")}>Deleted</button>
        </div>
        {activeTab === "In progress" &&
          tasks
            .filter((task) => !task.completed)
            .map((task, index) => (
              <div key={index} className="task-progress">
                <div>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <DateTime date={task.dateTime} />{" "}
                </div>
                <button onClick={() => markTaskAsCompleted(task)}>
                  Mark as completed
                </button>
                <button onClick={() => deleteTask(task)}>Delete</button>
              </div>
            ))}
        {activeTab === "Completed" &&
          tasks
            .filter((task) => task.completed)
            .map((task, index) => (
              <div key={index} className="task-completed">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={() => deleteTask(task)}>Delete</button>
              </div>
            ))}
        {activeTab === "Deleted" &&
          deletedTasks.map((task, index) => (
            <div key={index} className="task-deleted">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => deletePermanently(task)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
