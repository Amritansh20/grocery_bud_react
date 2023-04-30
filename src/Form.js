import { useState } from "react";
import { toast } from "react-toastify";
const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("Enter item to be added");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };
  return (
    <form className="grocery-form" onSubmit={handelSubmit}>
      <h3>grocery bud</h3>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          placeholder="add item"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="submit-btn">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
