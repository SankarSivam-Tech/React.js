
import ListItems from "./listItems";

const List = ({ items, handleCheckbox, handleDelete_btn }) => {
  return (
    <main>
      {items.length ? (
        <ListItems
          items={items}
          handleCheckbox={handleCheckbox}
          handleDelete_btn={handleDelete_btn}
        />
      ) : (
        <p>your list is empty</p>
      )}
    </main>
  );
};

export default List;
