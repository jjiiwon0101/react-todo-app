import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import cn from 'classnames';


import './scss/TodoInput.scss';

const TodoInput = () => {

  //입력창이 열리는 여부를 표현하는 상태값
  const [open, setOpen] = useState(false);

  //+ 버튼 클릭 시 이벤트 처리
  const onToggle = () => {
    setOpen(!open); //지금 기본값이 false이므로 클릭을 하면 true로 변함
  }

  return (
    <>
        {
            open && ( //
            <div className='form-wrapper'>
            <form className='insert-form'>
                <input 
                type='text'
                placeholder='할 일을 입력 후, 엔터를 누르세요!'
                />
            </form>
        </div>
        )
        }
        {/* 
          cn() : 첫번째 파라미터는 항상 유지할 default 클래스
                 두번째 파라미터는 논리 상태값
                  => 논리 상태값이 true일 경우 해당 클래스 추가
                     false일 경우 제거. {클래스이름: 논리값}
                     클래스 이름 지정 안할 시 변수명이 클래스 이름으로 사용
         */}
        <button className= {cn('insert-btn', {abc: open})} onClick={onToggle}>
            <MdAdd />
        </button>
    </>
  )
}

export default TodoInput