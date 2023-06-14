import React from 'react'
import {MdDone, MdDelete} from 'react-icons/md';
import cn from 'classnames';

import './scss/TodoItem.scss';

const TodoItem = ({ item  }) => {

  const {id, title, done} = item; //변수 선언, 각각의 프로퍼티가 들어감
  


  return (
    <li className='todo-list-item'>
        <div className={cn('check-circle active', {active: done})}>
          {done && <MdDone />}
        </div>
        <span className={cn('text', {finish: done})}>{title}</span>
        <div className='remove'>
          <MdDelete />
        </div>
    </li>
  )
}

export default TodoItem