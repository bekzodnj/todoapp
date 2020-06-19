import { GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './types';

export const getTodos = () => (dispatch) => {
  try {
    dispatch({
      type: GET_TODOS,
    });
  } catch (error) {}
};
