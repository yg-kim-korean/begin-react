import * as postsAPI from '../api/posts';
import { createPromiseThunk, createPromiseThunkById, handleAsyncActions, handleAsyncActionsById, reducerUtils } from '../lib/asyncUtils';

/* 액션 타입 */
// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// 포스트 비우기
const CLEAR_POST = 'CLEAR_POST';

// // thunk 사용시 꼭 모든 액션들에 대하여 액션 생성함수를 만들 필요는 없음
// // 그냥 thunk함수에서 바로 액션 객체를 만들어도 상관없음

// export const getPosts = () => async dispatch => {
//     dispatch({type:GET_POSTS});
//     try {
//         const posts = await postsAPI.getPosts();
//         dispatch({type:GET_POSTS_SUCCESS, posts});
//     }
//     catch(e){
//         dispatch({type:GET_POSTS_ERROR, error:e});
//     }
// };

// //thunk 함수에서도 파라미터를 받아와서 사용할 수 있습니다.
// export const getPost = id => async dispatch => {
//     dispatch({type:GET_POST});
//     try {
//         const post = await postsAPI.getPostById(id);
//         dispatch({type:GET_POST_SUCCESS, post});
//     }
//     catch(error) {
//         dispatch({type:GET_POST_ERROR, error});
//     }
// };

//'../lib/asyncUtils'; 생성후 리팩토링
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);


// export const clearPost =  () => ({type:CLEAR_POST});

const initialState = {
    // posts:{
    //     loading:false,
    //     data: null,
    //     error: null
    // },
    // post:{
    //     loading:false,
    //     data: null,
    //     error: null
    // }
    posts: reducerUtils.initial(),
    // post : reducerUtils.initial()
    post : {}
}

export default function posts(state = initialState, action) {
    // switch(action.type){
    //     case GET_POSTS:
    //         return {
    //           ...state,
    //           posts: reducerUtils.loading()
    //         };
    //     case GET_POSTS_SUCCESS:
    //         return {
    //             ...state,
    //             posts: reducerUtils.success(action.payload)
                
    //         };
    //     case GET_POSTS_ERROR:
    //         return {
    //             ...state,
    //             posts: reducerUtils.error(action.error)
    //         };
    //     case GET_POST:
    //         return {
    //             ...state,
    //             post: reducerUtils.loading()
    //         };
    //     case GET_POST_SUCCESS:
    //         return {
    //             ...state,
    //             post: reducerUtils.success(action.payload)
    //         };
    //     case GET_POST_ERROR:
    //         return {
    //             ...state,
    //             post: reducerUtils.error(action.error)
    //         };
    //     default:
    //         return state;   
    // }
    // 리팩토링
    switch(action.type){
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActionsById(GET_POST, 'post', true)(state, action);
        // case CLEAR_POST:
        //     return {
        //         ...state,
        //         post: reducerUtils.initial()
        //     }
        default:
            return state;
    }
}

//3번째 인자를 사용하면 withExtraArgument에서 넣어준 값들을 사용할 수있다.
export const goToHome = () => (dispatch, getState,{history}) =>{
    history.push('/');
};