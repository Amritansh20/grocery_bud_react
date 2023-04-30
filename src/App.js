import Form from "./Form";
import Items from "./Items";
import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};
const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
function App() {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: nanoid(),
      completed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item Added successfully");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item removed Successfully");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <div className="section-center">
      <ToastContainer position="top-center"></ToastContainer>
      <Form addItem={addItem}></Form>
      <Items items={items} removeItem={removeItem} editItem={editItem}></Items>
    </div>
  );
}

export default App;
