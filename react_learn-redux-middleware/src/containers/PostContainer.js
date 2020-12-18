import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../components/Post';
import { clearPost, getPost } from '../modules/posts';

function PostContainer({postId}) {
    const {data,loading, error} = useSelector(state=>state.posts.post[postId]) 
    || {
        loading:false,
        data: null,
        error: null
    }; // 아예 데이터가 존재하지 않을때가 있으니까 비구조화 할당이 오류나지 않도록
    const dispatch = useDispatch();

    useEffect(()=>{
        // if (data) return
        dispatch(getPost(postId));
    },[dispatch,postId])
    if (loading && !data ) return <div>로딩 중...</div>
    if (error) return <div>에러 발생</div>
    if (!data ) return null;
    return (
        <Post post={data} />
    )
    
}

export default PostContainer
