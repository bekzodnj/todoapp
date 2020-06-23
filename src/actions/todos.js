import { GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './types';

import { v1 as uuid } from 'uuid';

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
    const newItem = {
      id: uuid(),
      title: todo_title,
      pinned: false,
      done: false,
    };

    dispatch({
      type: CREATE_TODO,
      payload: newItem,
    });
  } catch (error) {}
};

export const deleteTodo = (todo_item) => (dispatch) => {
  try {
    dispatch({
      type: DELETE_TODO,
      payload: todo_item,
    });
  } catch (error) {}
};

export const updateTodo = (todo_item) => (dispatch) => {
  try {
    dispatch({
      type: UPDATE_TODO,
      payload: todo_item,
    });
  } catch (error) {}
};
