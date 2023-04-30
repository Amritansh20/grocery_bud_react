const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="grocery-item">
      <input
        type="checkbox"
        onChange={() => editItem(item.id)}
        checked={item.completed}
      ></input>
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        className="btn delete-btn"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
