// 💙 title이랑 content는 여기서만 쓸거기 때문에 굳이 redux가 담당하게 안해도 됨!

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';

import { addTodo } from '../redux/modules/todos';
import { deleteTodo } from '../redux/modules/todos';
import { switchTodo } from '../redux/modules/todos';

const todoCardLayoutStyles = {
  padding: '20px 100px',
};

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const formStyles = {
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const twoSectionStyles = {
  display: 'flex',
  justifyContent: 'space-between',
};

const sectionStyles = {
  width: '40%',
};

const todoStyles = {
  display: 'flex',
  justifyContent: 'space-between',
};

function TodoCard() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const onTitleChangeEventHandler = event => {
    setTitle(event.target.value);
  };
  const onContentChangeEventHandler = event => {
    setContent(event.target.value);
  };

  const dispatch = useDispatch();
  const onNewTodoSubmitEventHandler = event => {
    // onSubmit default 새로고침 방지
    event.preventDefault();

    // 유효성?검사
    if (title === '') {
      return alert('제목을 입력하세요');
    }
    if (content === '') {
      return alert('내용을 입력하세요');
    }

    const newTodo = { id: uuid(), title, content, isDone: false };
    dispatch(addTodo(newTodo));
    setTitle('');
    setContent('');
  };
  const todos = useSelector(state => state.todos);

  const onDeleteTodoClickEventHandler = id => {
    const deletedTodos = todos.filter(item => {
      return item.id !== id;
    });
    dispatch(deleteTodo(deletedTodos));
  };
  // const [isChecked, setIsChecked] = useState(true);
  const onCheckboxChangeEventHandler = id => {
    const isdoneTODO = todos.map(item => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    dispatch(switchTodo(isdoneTODO));
  };
  return (
    <div style={todoCardLayoutStyles}>
      <header style={headerStyles}>
        <h3>TODO of '2023.06.19.MON'</h3>
        <div>
          <button>할일 추가</button>
          <button>카드 삭제</button>
        </div>
      </header>
      <form style={formStyles} onSubmit={onNewTodoSubmitEventHandler}>
        <input type="text" placeholder="제목입력" value={title} onChange={onTitleChangeEventHandler} />
        <input type="text" placeholder="내용입력" value={content} onChange={onContentChangeEventHandler} />
        <div>
          <button type="submit">등록</button>
          <button type="button">취소</button>
        </div>
      </form>
      <div style={twoSectionStyles}>
        <section style={sectionStyles}>
          <h3>Working</h3>
          <ul>
            {todos
              .filter(todo => {
                return !todo.isDone;
              })
              .map(todo => {
                return (
                  <li key={todo.id} style={todoStyles}>
                    <div>
                      <input type="checkbox" checked={todo.isDone} onChange={() => onCheckboxChangeEventHandler(todo.id)} />
                      <span>
                        {todo.title} &nbsp; <Link to={`/tododetail/${todo.id}`}>+ 상세보기</Link>
                      </span>
                    </div>
                    <button onClick={() => onDeleteTodoClickEventHandler(todo.id)}>X</button>
                  </li>
                );
              })}
          </ul>
        </section>
        <section style={sectionStyles}>
          <h3>Done</h3>
          <ul>
            {todos
              .filter(todo => {
                return todo.isDone;
              })
              .map(todo => {
                return (
                  <li key={todo.id} style={todoStyles}>
                    <div>
                      <input type="checkbox" checked={todo.isDone} onChange={() => onCheckboxChangeEventHandler(todo.id)} />
                      <span>
                        {todo.title} &nbsp; <Link to={`/tododetail/${todo.id}`}>+ 상세보기</Link>
                      </span>
                    </div>
                    <button onClick={() => onDeleteTodoClickEventHandler(todo.id)}>X</button>
                  </li>
                );
              })}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default TodoCard;
