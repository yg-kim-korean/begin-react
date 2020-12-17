import React, { createContext, useContext, useReducer } from 'react'
import axios from 'axios';
import {createAsyncDispatcher, createAsyncHandler, initialAsyncState} from './asyncActionUtils';
import * as api from './api';
const initialState={
    users: initialAsyncState,
    user: initialAsyncState
};
const usersHandler = createAsyncHandler('GET_USERS','users');
const userHandler = createAsyncHandler('GET_USER','user');

function usersReducer(state, action){
    switch(action.type){
        case 'GET_USERS':
        case 'GET_USERS_SUCCESS':
        case 'GET_USERS_ERROR':
            return usersHandler(state, action);
        case 'GET_USER':
        case 'GET_USER_SUCCESS':
        case 'GET_USER_ERROR':
            return userHandler(state, action);
        default:
            throw new Error(`Unhanded action type: ${action.type}`);
    }
}

//state용 dispatch용 context 따로 만들기
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

// 위에서 선언한 두가지 Context들의 Provider로 감싸주는 컴포넌트
export function UesrsProvider({children}) {
    const [state, dispatch] = useReducer(usersReducer, initialState);
    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    );
}

//State를 쉽게 조회할수 있게 해주는 커스텀 Hook
export function useUsersState(){
    const state = useContext(UsersStateContext);
    if (!state){
        throw new Error('Can not fin UsersProvider');
    }
    return state;
}

//Dispatch를 쉽게 사용할 수 있게 해주는 커스텀 Hook
export function useUsersDispatch(){
    const dispatch = useContext(UsersDispatchContext);
    if (!dispatch){
        throw new Error('Can not fin UsersProvider');
    }
    return dispatch;
}

// export async function getUsers(dispatch){
//     dispatch({type:'GET_USERS'})
//     try {
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/users`
//         );
//         dispatch({type:'GET_USERS_SUCCESS', data: response.data});
//     }
//     catch(e){
//         dispatch({type:'GET_USERS_ERROR', error:e});
//     }
// }

// export async function getUser(dispatch,id){
//     dispatch({type:'GET_USER'})
//     try {
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/users/${id}`
//         );
//         dispatch({type:'GET_USER_SUCCESS', data: response.data});
//     }
//     catch(e){
//         dispatch({type:'GET_USER_ERROR', error:e});
//     }
// }

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);