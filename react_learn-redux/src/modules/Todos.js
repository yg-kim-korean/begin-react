import React from 'react'

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1;
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id : nextId ++,
        text
    }
});
export const toggleTOdo = id => ({
    type:TOGGLE_TODO,
    id
});

const initialState = [

];

export default function Todos(state = initialState, action) {
    switch (action.type){
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(
              todo =>
                todo.id === action.id // id 가 일치하면
                  ? { ...todo, done: !todo.done } // done 값을 반전시키고
                  : todo // 아니라면 그대로 둠
            );
        default:
            return state; 
    }
}
