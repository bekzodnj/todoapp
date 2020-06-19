import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import './styles/Todos.css';
import { getTodos } from './../actions/todos';
import { connect } from 'react-redux';
//redux imports
const Todos = ({ todos, getTodos }) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  //if not empty, render the TodoItem
  return (
    <div className='wrap'>
      {todos && todos.map((item) => <TodoItem key={item.id} todoData={item} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, {
  getTodos,
})(Todos);
