import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import {addTodo, toggleTOdo} from '../modules/Todos';
function TodosContainer() {

    //useSelector에서 꼭 객체를 반환할 필요는 없음
    // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됨.
    const todos = useSelector(state => state.Todos);
    console.log(todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    const onToggle = useCallback(
        id => dispatch(toggleTOdo(id)),
        [dispatch]
    ) //최적화를 위해 useCallback 사용
    return <Todos todos={todos} onCreate={onCreate} onToggle = {onToggle} />
    
}

export default TodosContainer

//
