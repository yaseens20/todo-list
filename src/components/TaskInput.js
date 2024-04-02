import React, { useState } from "react";

function TaskInput(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter task here"
        value={inputText}
      />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>ADD</span>
      </button>
    </div>
  );
}

export default TaskInput;
