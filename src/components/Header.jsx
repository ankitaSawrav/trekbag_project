import ItemContextProviders from "../contexts/ItemContextProviders";
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemContextProviders";
import Counter from "./Counter";

import Logo from "./Logo";

export default function Header() {
  const { items } = useContext(ItemsContext);
  console.log(items, "items in header")
  return (
    <ItemContextProviders className="header">
      <Logo></Logo>
      <Counter   const noOfpackedItems = {items.filter((item) => item.packed).length}
totalNumberOFitems = {items.length}/>
    </ItemContextProviders>
  );
}
