import React, { useState } from 'react'
import axios from 'axios';
// import useAsync from './useAsync';
import {useAsync} from 'react-async';
import User from './User';
import { useUsersDispatch, useUsersState, getUsers } from './UsersContext';

//useAsync 에서는 Promise의 결과를 바로 Data에 담기때문에
// 요청을 한 이후 reponse에서 data를 추출하여 반환하는 함수를 따로 생성
// async function getUsers(){
//     const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/users'
//     );
//     return response.data
// }

export default function Users() {
    // const [users, setUsers] = useState(null);
    // const [loading, setLoading ] = useState(false);
    // const [error, setError] = useState(null);
    // const fetchUsers = async () =>{ //useEffect 에 첫번째 파라미터로 등록하는 함수에는 async 를 사용 할 수 없기 때문에 함수 내부에서 async 를 사용하는 새로운 함수를 선언해주어야 합니다.
    //     try{
    //         //요청이 시작될때는 error와 users를 초기화하고
    //         setError(null);
    //         setUsers(null);
    //         //loading 상태를 true로 바꿈
    //         setLoading(true);
    //         const response = await axios.get(
    //             'https://jsonplaceholder.typicode.com/users'
    //         );
    //         setUsers(response.data); // 받아온데이터 user로 넣기
    //     }
    //     catch(e){
    //         setError(e)
    //     }
    //     setLoading(false);
    // };
    const [userId, setUserId] = useState(null);
    // const [state, refetch] = useAsync(getUsers,[],true);
    const state = useUsersState();
    const dispatch = useUsersDispatch();
    // const {data, error,isLoading, run} = useAsync({
    //     promiseFn : getUsers
    // })
    //------context 사용
    const {data, loading,error}  = state.users;
    const fetchData = () => {
        getUsers(dispatch);
    };
    //-----
    // if (isLoading) return <div>로딩중...</div>
    // if (error) return <div>에러가 발생했습니다.</div>
    // if (!data) return <button onClick={run}>불러오기</button>;
    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!data) return <button onClick={fetchData}>불러오기</button>;
    return (
        <>
            <ul>
                {data.map(user=>(
                    <li 
                    key={user.id} 
                    onClick={()=> setUserId(user.id)}
                    style={{cursor:'pointer'}}
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </>
    );
}
