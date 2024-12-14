import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem,handleAddItem_btn }) => {
  return (
    <form className="addForm" onSubmit={handleAddItem_btn}>
      <label htmlFor="addItem">Add Item</label>

      <input
        type="text"
        id="addItem"
        placeholder="Add Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
