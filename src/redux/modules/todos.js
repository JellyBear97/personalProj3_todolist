import uuid from 'react-uuid';

export const ADD_TODO = 'todos/ADD_TODO';
export const DELETE_TODO = 'todos/DELETE_TODO';
export const SWITCH_TODO = 'todos/SWITCH_TODO';

export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
export const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};
export const switchTodo = payload => {
  return {
    type: SWITCH_TODO,
    payload: payload,
  };
};

// 초기 상태값
const initialState = [
  {
    id: uuid(),
    title: '리액트 lv2 개인과제 제출',
    content: '기한은 23일 금요일 오후 1시',
    isDone: false,
  },
  {
    id: uuid(),
    title: '후발대 영상과제 제출',
    content: '기한은 23일 금요일',
    isDone: true,
  },
];

// 리듀서
// todos라는 리듀서는 action.type에 따라 새로운 state를 반환 (💙 todos라는 state라 봐도... 무방)
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // action은 객체니까 payload 가져오려면 객체에 접근
      return [...state, action.payload];
    case DELETE_TODO:
      return action.payload;
    case SWITCH_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default todos;
