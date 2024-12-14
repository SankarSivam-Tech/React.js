import "./index.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import AddItem from "./To-Do-List/addItem";
import SearchItem from "./To-Do-List/searchitem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("to-do-list"))
  );

  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");

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

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("to-do-list", JSON.stringify(listItems));
  };

  const handleAddItem_btn = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleAddItem_btn={handleAddItem_btn}
      />

      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />

      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(searchItem.toLowerCase())
        )}
        handleCheckbox={handleCheckbox}
        handleDelete_btn={handleDelete_btn}
      />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
