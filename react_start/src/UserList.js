import React, { useContext } from 'react'
import { UserDispatch } from './App'
const User = React.memo(function User ({user}) {
    const dispatch = useContext(UserDispatch);
    
    return(
        <div>
            <b  
                style={{
                    cursor:'pointer',
                    color:user.active? 'green' : 'yellow'
                }}
                onClick={()=>{
                    dispatch({type:'TOGGLE_USER', id: user.id})
                }}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={()=>{
                dispatch({type :'REMOVE_USER', id: user.id})
            }}>삭제</button>
        </div>
    )
}
)
function UserList({users}) {
    
    return (
        <div>
            {users.map(user=>(
            <User key={user.id} user={user} />))}
        </div>
    )
}
export default React.memo(UserList)

// const onToggle = useCallback(id=>{
//     dispatch({
//       type:'TOGGLE_USER',
//       id
//     });
//   },[]);

//   const onRemove = useCallback(id=>{
//     dispatch({
//       type:'REMOVE_USER',
//       id
//     });
//   },[]);