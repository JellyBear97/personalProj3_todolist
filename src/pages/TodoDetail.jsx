import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Stcard = styled.div`
  position: relative;
  width: 600px;
  min-height: 300px;
  margin: 20px auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: beige;
`;

const StPreviousButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const StCardH3 = styled.h3`
  width: 100%;
  height: 40px;
  font-size: 25px;
`;

const StCardP = styled.p`
  width: 100%;
  height: 100%;
`;

function TodoDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const todos = useSelector(state => state.todos);
  const targetTodo = todos.filter(todo => {
    return todo.id === params.id;
  });
  console.log(targetTodo);
  const title = targetTodo[0].title;
  const content = targetTodo[0].content;

  return (
    <div>
      <Stcard>
        <StPreviousButton
          onClick={() => {
            navigate('/');
          }}>
          이전으로
        </StPreviousButton>
        <StCardH3>{title}</StCardH3>
        <StCardP>{content}</StCardP>
      </Stcard>
    </div>
  );
}

export default TodoDetail;
