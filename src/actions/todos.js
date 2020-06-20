import { GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './types';

// redux actions to control data flow

export const getTodos = () => (dispatch) => {
  try {
    dispatch({
      type: GET_TODOS,
    });
  } catch (error) {}
};

export const createTodo = (todo_title) => (dispatch) => {
  try {
    dispatch({
      type: CREATE_TODO,
      payload: todo_title,
    });
  } catch (error) {}
};

export const deleteTodo = (todo_id) => (dispatch) => {
  try {
    dispatch({
      type: DELETE_TODO,
      payload: todo_id,
    });
  } catch (error) {}
};

export const updateTodo = (todo_id) => (dispatch) => {
  try {
    dispatch({
      type: UPDATE_TODO,
      payload: todo_id,
    });
  } catch (error) {}
};
