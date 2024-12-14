import React from "react";

const SearchItem = ({ SearchItem, setSearchItem }) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="searchForm">Search Item</label>
      <input
        type="text"
        id="searchForm"
        placeholder="Search Item"
        value={SearchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
