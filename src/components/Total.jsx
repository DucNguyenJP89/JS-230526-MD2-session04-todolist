import React from "react";

function Total({count, clearAll}) {
  return (
    <div className="total list-todo">
      <div className="todo-item">You have {count} pending task</div>
      <button className="btn-clear" onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default Total;
