import { createContext, useEffect, useState } from "react";
import { defaultList } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemContextProviders({ children }) {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(itemsFromLocalStorage || defaultList);

  const handleAddItem = (itemText) => {
    setItems((prev) => [
      ...prev,
      { id: prev.length + 1, name: itemText, packed: false },
    ]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    // console.log("toggle called ");
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(() => [...newItems]);
    console.log(items, "items updated");
  };

  const handleMarkAllAsInComplete = () => {
    console.log("here in incomplete ", items)
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems([ ...newItems]);
  };

  const handleResetItems = () => {
    setItems(defaultList);
  };


  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleMarkAllAsComplete,
        handleMarkAllAsInComplete,
        handleResetItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
