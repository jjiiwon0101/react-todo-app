import React from 'react'
import {MdDone, MdDelete} from 'react-icons/md';
import cn from 'classnames';

import './scss/TodoItem.scss';

const TodoItem = ({ item, remove, check, rest  }) => {

  const {id, title, done} = item; //변수 선언, 각각의 프로퍼티가 들어감
  


  return (
    <li className='todo-list-item'>
        <div 
        className={cn('check-circle active', {active: done})}
        onClick={() => check(id)}
        >
          {done && <MdDone />}
        </div>
        <span className={cn('text', {finish: done})}>{title}</span>
        <div className='remove' onClick={() => remove(id)}>
          <MdDelete />
        </div>
    </li>
  )
}

export default TodoItem