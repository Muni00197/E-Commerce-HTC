import {
  ADD_ITEM,
  DELETE_ITEM,
  REMOVE_ITEM,
  SUCCESS_ORDER,
} from './cartActionTypes';

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const PreData = state.find((val) => val.id === action.payload.id);
      if (PreData) {
        return state.map((value) =>
          value.id === action.payload.id
            ? { ...value, quantity: value.quantity + 1 }
            : value
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case REMOVE_ITEM:
      const PreData1 = state.find((val) => val.id === action.payload.id);
      if (PreData1.quantity === 1) {
        return state.filter((value) => value.id !== action.payload.id);
      } else {
        return state.map((value) =>
          value.id === action.payload.id
            ? { ...value, quantity: value.quantity - 1 }
            : value
        );
      }
    case DELETE_ITEM:
      const FilteredData = state.filter(
        (data) => data.id !== action.payload.id
      );
      return FilteredData;
    case SUCCESS_ORDER:
      return [];
    default:
      return state;
  }
};
