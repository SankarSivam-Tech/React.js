import React from "react";

import LineItem from "./lineItem";

const ListItems = ({ items, handleCheckbox, handleDelete_btn }) => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {items.map((item) => (
        <LineItem
          item={item}
          key={item.id}
          handleCheckbox={handleCheckbox}
          handleDelete_btn={handleDelete_btn}
        />
      ))}
    </ul>
  );
};

export default ListItems;
