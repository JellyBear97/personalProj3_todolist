import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todos from '../modules/todos';

// 중앙 관리소 생성
const rootReducer = combineReducers({
  /* modules에 넣어준 state의 묶음을 객체 데이터 형태로 담아 */
  todos,
});
const store = createStore(rootReducer);

// store 내보내기
export default store;
