import React, { useState } from "react";
import "./todolist.css";

function Todolist() {
  const [todo, setTodo] = useState("");
  const [display, setDisplay] = useState("");

  function clickHandlePost(e) {
    e.preventDefault();
    setDisplay(todo);
    setTodo("");
    console.log(todo);
  }
  function clickHandleClear() {
    setDisplay("");
  }
  return (
    <div className="card">
      <form>
        <div className="card-1">
          <div className="card-title">
            <p>Notepad</p>
          </div>
          <div className="text-box">
            <textarea
              name="postContent"
              rows={13}
              cols={53}
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Enter your to do list here"></textarea>
          </div>
        </div>
        <div className="card-2">
          <button type="submit" className="save-btn" onClick={clickHandlePost}>
            Post
          </button>
        </div>
        <div className="console-box">
          <p>Console</p>
          <textarea
            className="console-text-box"
            name="console"
            rows={10}
            cols={53}
            disabled
            value={display}></textarea>
        </div>
        <div className="card-3">
          <button
            type="submit"
            className="clear-btn"
            onClick={clickHandleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default Todolist;
