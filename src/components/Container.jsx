import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import Total from "./Total";

function Container() {
  const [lists, setLists] = useState([]);
  const todoList = lists.map((todo) => (
    <Todo
      todo={todo}
      key={todo.id}
      editTask={editTask}
      setTaskComplete={setTaskComplete}
      deleteTask={deleteTask}
    />
  ));
  const [count, setCount] = useState(todoList.length);
  function addTask(content) {
    const newLists = [
      ...lists,
      {
        id: Math.floor(Math.random() * 1000),
        content: content,
        completed: false,
      },
    ];
    setLists(newLists);
    setCount(count+1);
  }
  function editTask(id, newContent) {
    const newLists = lists.map((todo) => {
      if (todo.id === id) {
        return { ...todo, content: newContent };
      }
      return todo;
    });
    setLists(newLists);
  }
  function setTaskComplete(id) {
    const newLists = lists.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      }
      return todo;
    });
    setLists(newLists);
    setCount(count-1);
  }
  function deleteTask(id) {
    const newLists = lists.filter((todo) => todo.id !== id);
    setLists(newLists);
    setCount(count-1);
  }
  function clearAll() {
    setLists([]);
    setCount(0);
  }
  return (
    <div className="container">
      <h1>TODOLIST APP</h1>
      <Form addTask={addTask} />
      <div className="container-todo">
        {todoList}
      </div>
      <Total count={count} clearAll={clearAll}/>
    </div>
  );
}

export default Container;
