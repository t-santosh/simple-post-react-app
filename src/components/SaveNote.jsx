import React, { useState } from "react";

function SaveNote() {
  const [name, setName] = useState("");

  const handleClick = () => {
    console.log("todo list: ", setName);
    setName("");
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>todo</button>
      <h1>Heading {name}</h1>
    </div>
  );
}

export default SaveNote;
