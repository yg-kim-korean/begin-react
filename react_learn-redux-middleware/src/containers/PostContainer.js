import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../components/Post';
import { clearPost, getPost } from '../modules/posts';

function PostContainer({postId}) {
    const {data,loading, error} = useSelector(state=>state.posts.post);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPost(postId));
        return () =>{
            dispatch(clearPost());
        };
    },[dispatch,postId])
    if (loading) return <div>로딩 중...</div>
    if (error) return <div>에러 발생</div>
    if (!data ) return null;
    return (
        <Post post={data} />
    )
    
}

export default PostContainer
