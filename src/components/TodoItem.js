import React, { useEffect, useState } from 'react';

import { Checkbox, Popconfirm, message, Button } from 'antd';

//redux imports
import { connect } from 'react-redux';
import { getTodos, deleteTodo, updateTodo } from './../actions/todos';

//style
import './styles/TodoItem.css';

const TodoItem = ({ todoData, updateTodo, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    getTodos();
    setIsDone(todoData.done);
  }, [todoData.done]);

  function onChange(e) {
    setIsDone(e.target.checked);
  }

  function labelOnClick() {
    updateTodo(todoData);
  }

  // deletion confirm
  function confirm(e) {
    deleteTodo(todoData);
    message.success('Task deleted');
  }

  /*
     Single TodoItem (line) consist of:
        - Todo Title
        - CheckBox to move it to Done
        - Deletion btn with confirm
  */
  return (
    <div
      className=''
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div className='todoItem' onClick={() => labelOnClick()}>
        <div className={todoData.done ? 'doneItem' : 'itemText'}>
          {todoData.title}
        </div>
        <Checkbox onChange={onChange} checked={isDone} />
      </div>
      <div>
        <Popconfirm
          title='Are you sure delete this task?'
          onConfirm={confirm}
          okText='Yes'
          cancelText='No'
        >
          <Button size='small'>-</Button>
        </Popconfirm>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, {
  getTodos,
  deleteTodo,
  updateTodo,
})(TodoItem);
