import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';

function reducer(state,action){
    switch(action.type){
        case 'LOADING':
            return {
                loading:true,
                data:null,
                error:null
            };
        case 'SUCCESS':
            return {
                loading:false,
                data:action.data,
                error:null
            };
        case 'ERROR':
            return {
                loading:false,
                data:null,
                error:action.error
            };
        default:
            throw new Error (`Unhandled action type: ${action.type}`);
    }
}

export default function Users() {

    const [state,dispatch] = useReducer(reducer,{
        loading:false,
        data:null,
        error:null
    })
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
    const fetchUsers = async () =>{
        dispatch({type:'LOADING'});
        try{
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            dispatch({type:'SUCCESS', data: response.data});
        }
        catch(e){
            dispatch({type:'ERROR', error:e})
        }
    }
    useEffect(()=>{
        fetchUsers();
    },[]);

    const {loading, data, error} = state;

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!data) return null;
    return (
        <>
            <ul>
                {data.map(user=>(
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    )
}
