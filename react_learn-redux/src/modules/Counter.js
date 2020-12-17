import React from 'react'

//액션타입 만들기

//Ducks 패턴을 따른땐 액션의 이름에 접두사 넣기
//이렇게 하면 다른 모듈가 액션이름이 중복되는것을 방지
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성함수 만들기
export const setDiff = diff => ({type:SET_DIFF, diff});
export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

//초기상태 선언
const initialState = {
    number : 0,
    diff : 1
}

//리듀서 선언
export default function Counter(state = initialState, action) {
    switch(action.type){
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        case INCREASE:
            return {
                ...state,
                number : state.number + state.diff
            }
        case DECREASE:
            return {
                ...state,
                number : state.number - state.diff
            }
        default:
            return state;
    }
    
}
