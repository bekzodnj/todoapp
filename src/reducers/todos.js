import {
  GET_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  CREATE_TODO,
} from './../actions/types';

import { todoDataArr } from './sampleData';

const initialState = todoDataArr;

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO:
      /*
      Create new todo object
      append to the sample array
      */

      return [...state, payload];

    case GET_TODOS:
      return state;

    case UPDATE_TODO:
      /*
      Iterate over array, if found matching item
      change `done`  property and return updated array
      */
      const updatedState = state.map((item) => {
        if (item.id === payload.id) return { ...item, done: !item.done };
        return item;
      });
      return updatedState;

    case DELETE_TODO:
      /*
      Iterate over array:
      return all items except passed todo item
      */
      const newState = state.filter((item) => item.id !== payload.id);
      return newState;

    default:
      return state;
  }
}
