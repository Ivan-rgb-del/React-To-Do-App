import React, { useState } from 'react';

import classes from './Card.module.css';

import List from './List';
import Alert from './Alert';

const Card = () => {
  const [inputTodo, setInputTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: ''
  });

  const changeInputHandler = (event) => {
    event.preventDefault();
    setInputTodo(event.target.value);
  };

  // Add something to to-do list
  const addItemHandler = (event) => {
    event.preventDefault();

    if (inputTodo.length === 0) {
      setAlert({ show: true, message: 'Please Enter Value!', type: 'danger' })
    } else if (inputTodo.length > 0) {
      setAlert({ show: true, message: 'Item Added To The List!', type: 'success' })
      const newItem = { id: Math.random(), title: inputTodo };
      setTodoList([ ...todoList, newItem ]);
      setInputTodo('');
    }
  };

  // Remove item when we click on delete
  const removeItemHandler = (id) => {
    setAlert({ show: true, message: 'Item Removed!', type: 'danger' });
    const newArr = todoList.filter(todoId => todoId.id !== id);
    setTodoList(newArr);
  };

  // Remove all items form an aray when click on Clear Items
  const removeAllItemsHandler = () => {
    setAlert({ show: true, message: 'Empty List!', type: 'danger' });
    setTodoList([]);
  };

  // Remove alert
  const removeAlert = () => {
    setAlert({ show: false, message: '', type: '' });
  };

  return (
    <div className={classes.card}>
      {alert.show &&
        <Alert
          alertMessage={alert.message}
          messageType={alert.type}
          alertRemoved={removeAlert}
          list={todoList}
        />
      }

      <h1>To-Do List</h1>
      <form onSubmit={addItemHandler}>
        <input
          type="text"
          name="inputTodo"
          id='inputTodo'
          placeholder='Learn React...'
          value={inputTodo}
          onChange={changeInputHandler}
        />
        <button>Submit</button>
      </form>

      <List
        items={todoList}
        onRemoveItemHandler={removeItemHandler}
      />

      <button
        className={classes.btn}
        onClick={removeAllItemsHandler}>
          Clear Items
      </button>
    </div>
  );
};

export default Card;