import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const cardStyles = {
  position: 'relative',
  width: '600px',
  minHeight: '300px',
  margin: '20px auto',
  padding: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: 'beige',
};

const previousButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
};

function TodoDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const todos = useSelector(state => state.todos);
  // console.log(todos);
  // console.log(params);
  const targetTodo = todos.filter(todo => {
    return todo.id === params.id;
  });
  console.log(targetTodo);
  const title = targetTodo[0].title;
  const content = targetTodo[0].content;

  return (
    <div>
      <div style={cardStyles}>
        <button
          onClick={() => {
            navigate('/');
          }}
          style={previousButtonStyle}>
          이전으로
        </button>
        <h3 style={{ width: '100%', height: '40px', fontSize: '25px' }}>{title}</h3>
        <p style={{ width: '100%', height: '100%' }}>{content}</p>
      </div>
    </div>
  );
}

export default TodoDetail;
