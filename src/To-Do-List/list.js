import React, { useState } from "react";

const List = () => {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "front-end" },
    { id: 2, checked: true, item: "back-end" },
    { id: 3, checked: true, item: "design" },
  ]);

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input type="checkbox" check={item.checked}  />
            <label>{item.item}</label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default List;
