import { ADD_ITEM, DELETE_ITEM, REMOVE_ITEM, SUCCESS_ORDER } from "./cartActionTypes";

export const addItemToCart = (newItem) => {
  return {
    type: ADD_ITEM,
    payload: newItem,
  };
};
export const removeItemFromCart = (Item) => {
  return {
    type: REMOVE_ITEM,
    payload: Item,
  };
};
export const deleteItemFromCart =(Item)=>{
  return{
    type :DELETE_ITEM,
    payload:Item
  }
}
export const successOrder =()=>{
  return {
    type : SUCCESS_ORDER 
  }
}
