import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [item, setItem] = useState("");
  const [handleItems, setHandleItems] = useState([]);

  function addItem(event) {
    return setItem(event.target.value);
  }

  function handlingClick() {
    setHandleItems((prevItems) => [...prevItems, item]);
    setItem("");
  }

  function deleteItem(id) {
    setHandleItems((prevItems) => {
      return prevItems.filter((_handleItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={addItem} />
        <button onClick={handlingClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {handleItems.map((todoItem, index) => (
            <TodoItem
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
