import Button from "./Button";
import { useState, useRef } from "react";

export default function FormItem({ onAddItem}) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleInputChange = (event) => {
    event.preventDefault();
    console.log(event.target.value, "input value ");
    setItemText(event.target.value);
  };

  const handleSubmit = (e) => {
    if (!itemText) {
      alert("Item cannot be empty");
      inputRef.current.focus();
    }
    e.preventDefault();
    console.log("submitting", itemText);
    const newItem = {
      id: 4,
      name: itemText,
      value: false,
    };
    console.log(newItem, "new item");
    // TODO: add item to items
    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new item..."
        value={itemText}
        onChange={handleInputChange}
        autoFocus
      ></input>
      <Button>Add to list</Button>
    </form>
  );
}
