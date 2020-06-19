import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

//redux imports
import { connect } from 'react-redux';
import { getTodos } from './../actions/todos';

//style
import './styles/TodoItem.css';

const TodoItem = ({ getTodos, todoData }) => {
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    getTodos();

    setIsDone(todoData.done);
  }, [getTodos]);

  function onChange(e) {
    setIsDone(e.target.checked);
  }

  function labelOnClick() {
    setIsDone(!isDone);
  }

  return (
    <div className='todoItem' onClick={() => labelOnClick()}>
      <label>{todoData.title}</label>
      <Checkbox onChange={onChange} checked={isDone} />
    </div>
  );
};

TodoItem.propTypes = {};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, {
  getTodos,
})(TodoItem);
