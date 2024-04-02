import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Build a Simple React To-Do Application</h1>
      </div>
      <TaskInput onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TaskList
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
