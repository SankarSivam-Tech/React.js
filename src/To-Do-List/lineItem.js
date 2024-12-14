import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({ item, handleCheckbox, handleDelete_btn }) => {
  return (
    <li className="item">
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
  )
};

export default LineItem;
