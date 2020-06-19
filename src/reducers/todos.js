import moduleName, {
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
      return [...state, payload];

    case GET_TODOS:
      return state;

    case UPDATE_TODO:
      return state;

    case DELETE_TODO:
      return state;

    default:
      return state;
  }
}
