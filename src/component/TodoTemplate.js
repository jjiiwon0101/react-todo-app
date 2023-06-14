import React from 'react'
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';

import './scss/TodoTemplate.scss'

const TodoTemplate = () => {

  //서버에 할 일 목록(json)을 요청(fetch)해서 받아와야 함.
  const todos = [
    {
      id : 1,
      title : '아침 산책하기',
      done : false
    },

    {
      id : 2,
      title : '오늘 주간신문 읽기',
      done : false
    },

    {
      id : 3,
      title : '리액트 복습하기',
      done : true
    },

    {
      id : 4,
      title : '유화 연습하기',
      done : true
    }
  ]

  return (
    <div className='TodoTemplate'>
      <TodoHeader />
      <TodoMain todoList={todos}/>
      <TodoInput />

    </div>
  );

}

export default TodoTemplate