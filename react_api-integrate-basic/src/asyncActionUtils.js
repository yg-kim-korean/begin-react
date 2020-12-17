// 파라미터로 액션의 타입 (예:GET_USER) 과 Promise를 만들어 주는 함수를 받아옴.
export function createAsyncDispatcher(type, promiseFn) {
    //성공 실패에 대한 액션타입 문자열 준비
    const SUCCESS = `${type}_SUCCESS`
    const ERROR = `${type}_ERROR`

    //새로운 함수 생성
    // ...rest  활용하여 나머지 파라미터는 rest에 담기

    async function actionHandler(dispatch, ...rest){
        dispatch ({type});
        try{
            const data = await promiseFn(...rest);
            dispatch({
                type: SUCCESS,
                data                
            });
        }
        catch(e){
            dispatch({
                type: ERROR,
                error:e
            });
        }
    }
    return actionHandler;
}
export const initialAsyncState ={
    
        loading:false,
        data:null,
        error:null
    
};

const loadingState={
    loading:true,
        data:null,
        error:null
}

const success = data => ({
    loading:false,
        data,
        error:null
})

const error = error => ({
    loading:false,
        data:null,
        error
})

//세가지 액션을 처리하는 리듀서 만들기
// type은 액션타입, key는 리듀서에서 사용할 필드이름(예: user, users)
export function createAsyncHandler(type,key){
    //성공 실패에 대한 액션타입 문자열 준비
    const SUCCESS = `${type}_SUCCESS`
    const ERROR = `${type}_ERROR`

    function handler(state,action){
        switch(action.type){
            case type:
                return {
                    ...state,
                    [key] : loadingState
                };
            case SUCCESS:
                return {
                    ...state,
                    [key] : success(action.data)
                };
            case ERROR:
                return {
                    ...state,
                    [key] : error(action.error)
                };
            default:
                return state
        }
    }
    return handler;
}