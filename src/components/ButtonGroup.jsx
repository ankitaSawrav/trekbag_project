import { useContext } from "react";
import Button from "./Button";
import { ItemsContext } from "../contexts/ItemContextProviders";



export default function ButtonGroup() {
  const {
    handleRemoveAllItems, 
    handleResetItems,
    handleMarkAllAsComplete,
    handleMarkAllAsInComplete,
  } = useContext(ItemsContext);
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={handleMarkAllAsComplete}>Mark all as complete</Button>
      <Button buttonType="secondary" onClick={handleMarkAllAsInComplete}> Mark all as incomplete</Button>
      <Button buttonType="secondary"  onClick= {handleRemoveAllItems} >Remove all items</Button>
      <Button buttonType="secondary" onClick={handleResetItems} >Reset to intial</Button>
    </section>
  );
}
