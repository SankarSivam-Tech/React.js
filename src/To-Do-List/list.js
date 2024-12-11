import React, { useState } from "react";

const List = () => {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "front-end" },
    { id: 2, checked: false, item: "back-end" },
    { id: 3, checked: true, item: "design" },
  ]);

  return (
    <ul style={{listStyleType:'none'}}>
      {items.map((item) => (
        <li>
          <input type="checkbox" checked={item.checked} />
          <label>{item.item}</label>
        </li>
      ))}
    </ul>
  );
};

export default List;
