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

  /*
      First we're rendering, unfinished todos (!done)
      Then, finished todos (done)
      Finally, if todos array is empty show some text
  */
  return (
    <div className='wrap'>
      {todos &&
        todos
          .slice(0)
          .reverse()
          .map(
            (item) => !item.done && <TodoItem key={item.id} todoData={item} />
          )}
      {todos &&
        todos
          .slice(0)
          .reverse()
          .map(
            (item) => item.done && <TodoItem key={item.id} todoData={item} />
          )}
      {todos.length === 0 ? 'You are done for today :)' : ''}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, {
  getTodos,
})(Todos);
