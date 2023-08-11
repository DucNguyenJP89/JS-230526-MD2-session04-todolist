import React, { useState } from "react";

function Form({addTask}) {
  const [content, setContent] = useState("");
  function handleChange(e) {
    setContent(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addTask(content);
    setContent("");
  }
  return (
    <div>
      <form className="main-form">
        <input
          type="text"
          className="input"
          placeholder="Enter new todo..."
          value={content}
          onChange={handleChange}
        ></input>
        <button className="add" onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default Form;
