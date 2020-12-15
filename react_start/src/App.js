import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InputSample'
import UserList from './UserList'
import React , {useCallback, useMemo, useRef, useState, useReducer} from 'react'
import CreateUser from './CreateUser'
import useInputs from './hooks/useInputs'
import produce from 'immer'
function countActiveUsers(users) {
  console.log('활성 사용자 세는 중...');
  return users.filter(user=>user.active).length;
}
const initialState= {
  inputs:{
    username:'',
    email:''
  },
  users:[
    {id : 1, username:'v', email:'ksdfi@naver.com', active:true},
    {id : 2, username:'m', email:'ksdfqwdi@naver.com', active:false},
    {id : 3, username:'c', email:'wqwdi@naver.com', active:true},
  ]
};
function reducer(state, action) {
  switch (action.type){
    // case 'CHANGE_INPUT':
    //   return{
    //     ...state,
    //     inputs:{
    //       ...state.inputs,
    //       [action.name] : action.value
    //     }
    //   };
    case 'CREATE_USER':
      return (produce(state, draft => {
          draft.users.push(action.user);
        })
        )
    case 'TOGGLE_USER':
      return (produce(state,draft =>{
          const user = draft.users.find(user => user.id === action.id);
          user.active = !user.active;
        })
        )
      
    case 'REMOVE_USER':
      return (produce(state, draft => {
          const index = draft.users.findIndex(user => user.id === action.id);
          draft.users.splice(index,1);
        })
        )
    default :
      return state;
  }  
}

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {users} = state;
  
  const count = useMemo(()=> countActiveUsers(users),[users]);

  return (
    <UserDispatch.Provider value = {dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용 자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
