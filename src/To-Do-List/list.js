import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const List = () => {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "front-end" },
    { id: 2, checked: false, item: "back-end" },
    { id: 3, checked: true, item: "design" },
  ]);

  const handleCheckbox = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("to-do-list", JSON.stringify(listItems));
  };

  const handleDelete_btn = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("to-do-list", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul style={{ listStyleType: "none" }}>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheckbox(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheckbox(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                onClick={() => handleDelete_btn(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>your list is empty</p>
      )}
    </main>
  );
};

export default List;
