// import axios from 'axios';
// import React from 'react'
// import useAsync from './useAsync'

// async function getUser(id){
//     const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     return response.data;
// }

// export default function User({id}) {
//     const [state] = useAsync(()=>getUser(id),[id]);
//     const {loading, data, error} = state;
//     if (loading) return <div>로딩중..</div>;
//     if (error) return <div>에러가 발생했습니다</div>;
//     if (!data) return null;
//     return (
//         <div>
//             <h2>{data.username}</h2>
//             <p>
//                 <b>Email : </b> {data.email}
//             </p>
//         </div>
//     );
// }
//----------------------------------react-async로 변환
import React from 'react';
import axios from 'axios';
import {useAsync} from 'react-async'
async function getUser({id}){
    const response =await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    )
    return response.data;
}

export default function User({id}) {
    const {data, error, isLoading} = useAsync({
        promiseFn : getUser,
        id,
        watch:id
    });
    if (isLoading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!data) return null;
    return (
        <div>
            <h2>{data.username}</h2>
            <p>
                <b>Email : </b> {data.email}
            </p>
        </div>
    );
}
