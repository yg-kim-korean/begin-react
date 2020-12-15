import React, { useContext, useRef } from 'react'
import { UserDispatch } from './App';
import useInputs from './hooks/useInputs';

const CreateUser = () => {
    const [{username,email},onChange,reset] = useInputs({
        username:'',
        email: ''
      })
      
    const nextId = useRef(4);  
    const dispatch = useContext(UserDispatch);
    const onCreate = ()=>{
        dispatch({
          type: 'CREATE_USER',
          user:{
            id:nextId.current,
            username,email
          }
        });
        reset();
        nextId.current+=1;
      };
    
    return (
        <div>
            <input 
                name="username"
                type = "text"
                placeholder="계정명"
                onChange={onChange}
                value={username} />
            <input 
                name="email"
                type="email"
                placeholder="이메일"
                onChange={onChange}
                value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}
export default React.memo(CreateUser)