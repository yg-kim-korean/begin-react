//2개로 되어진 리듀서 합치기 (루트 리듀서)

import { combineReducers } from 'redux';
import Counter from './Counter';
import Todos from './Todos';

const rootReducer = combineReducers({
    Counter, Todos
});
export default rootReducer;
