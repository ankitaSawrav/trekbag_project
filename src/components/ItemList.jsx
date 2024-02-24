import EmptyView from "./EmptyView";
import Select from "react-select";
import { useContext, useMemo, useState } from "react";
import { ItemsContext } from "../contexts/ItemContextProviders";

export default function ItemList() {

  const { items, handleDeleteItem, handleToggleItem } = useContext(ItemsContext);
  
  const sortingOptions = [
    { value: "default", label: "sort by default" },
    { value: "packed", label: "sort by packed" },
    { value: "unpacked", label: "sort by unpacked" },
  ];

  const [sortBy, setSortBy] = useState("default");

  const sortedItem = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy === "packed") {
        return b.packed - a.packed;
      } else if (sortBy === "unpacked") {
        return a.packed - b.packed;
      } else {
        return a.id - b.id;
      }
    });
  }, [items, sortBy]);


  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView></EmptyView>}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
            options={sortingOptions}
          ></Select>
        </section>
      )}
      {sortedItem.map((option) => {
        return (
          <Item
            key={`${option.id}`}
            onDeleteItem={handleDeleteItem}
            item={option}
            onToggleItem={handleToggleItem}
          >
            {option.name}
          </Item>
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => {
            onToggleItem(item.id);
          }}
          type="checkbox"
          checked={item.packed}
        ></input>
        {item.name}
      </label>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
