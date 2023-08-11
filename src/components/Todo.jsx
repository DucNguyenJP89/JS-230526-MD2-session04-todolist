import React, { useState } from 'react';

function Todo({todo, editTask, setTaskComplete, deleteTask}) {
  const [isEditing, setEditing] = useState(false);
  const [newContent, setNewContent] = useState("");
  const [isCompleted, setCompleted] = useState(todo.completed);
  const viewMode = (
    <div className={isCompleted ? "list-todo completed" : "list-todo"}>
      <div className="todo-item">{todo.content}</div>
      <div className="list-btn">
        <button onClick={()=>setEditing(true)}>
          <ion-icon name="create-outline"></ion-icon>
        </button>
        <button onClick={handleDelete}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
        <button onClick={handleComplete}>
          <ion-icon name="checkmark-done-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
  const editMode = (
    <div className="list-todo">
      <form className="main-form">
        <input type="text" className="input" name="edit" id={todo.id} defaultValue={todo.content} onChange={handleChangeContent} />
        <button className="add" onClick={handleChangeSubmit}>Update</button>
        <button className="cancel" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
  function handleChangeContent(e) {
    const newContent = e.target.value;
    setNewContent(newContent);
  }
  function handleChangeSubmit(e) {
    e.preventDefault();
    if (newContent === '') {
      alert("Task cannot be empty");
    } else {
      editTask(todo.id, newContent);
      setNewContent("");
      setEditing(false);
    }
  }
  function handleCancel(e) {
    e.preventDefault();
    setEditing(false);
  }
  function handleComplete() {
    setCompleted(true);
    setTaskComplete(todo.id);
  }
  function handleDelete() {
    deleteTask(todo.id);
  }
  return (
    (isEditing ? editMode : viewMode)
  )
}

export default Todo