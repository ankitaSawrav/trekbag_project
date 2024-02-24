import FormItem from './FormItem'; 
import ButtonGroup from './ButtonGroup'; 
import {useContext} from 'react';
import {ItemsContext} from '../contexts/ItemContextProviders';

export default function SideBar() {
  const{handleAddItem,} = useContext(ItemsContext);
  return (
    <div className="sidebar">
      <FormItem onAddItem={handleAddItem}></FormItem>
      <ButtonGroup></ButtonGroup>
    </div>
  );
}
