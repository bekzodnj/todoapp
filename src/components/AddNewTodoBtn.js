import React, { useState } from 'react';
import { Button, Drawer, Input, message } from 'antd';

import './styles/AddNewTodoBtn.css';

import { connect } from 'react-redux';
import { createTodo } from './../actions/todos';

const AddNewTodoButton = ({ createTodo }) => {
  // is drawer open, bool value for btn
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  // stores input value in drawer
  const [inputValue, setInputValue] = useState('');

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };
  const onClose = () => {
    setIsDrawerVisible(false);
  };

  // input todo handlers
  const handleSave = () => {
    success(inputValue);
    createTodo(inputValue);
    setIsDrawerVisible(false);
    setInputValue('');
  };

  //success message popup
  const success = (value) => {
    message.success('New todo created: ' + value);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
        <Button
          type='primary'
          shape='circle'
          icon={'+'}
          size='large'
          style={{ transform: 'scale(2)' }}
          onClick={() => showDrawer()}
        />
      </div>
      <div className=''>
        <Drawer
          title='Hit Enter to save'
          placement='bottom'
          closable={true}
          onClose={() => onClose()}
          visible={isDrawerVisible}
          getContainer={true}
        >
          <p>Create a new todo</p>
          <Input
            size='large'
            allowClear
            placeholder='Type your goal'
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onPressEnter={() => handleSave()}
            maxLength={50}
          />
          <Button
            type='primary'
            size='middle'
            onClick={() => handleSave(inputValue)}
            style={{ marginTop: 10 }}
          >
            Add
          </Button>
        </Drawer>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { createTodo })(AddNewTodoButton);
