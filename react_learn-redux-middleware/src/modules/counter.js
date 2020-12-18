const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});


//thunk 사용해보기 위해 생성

export const increaseAsync = () => dipatch =>{
    setTimeout(()=> dipatch(increase()),1000);
}

export const decreaseAsync = () => dipatch =>{
    setTimeout(()=> dipatch(decrease()),1000);
}
const initialState =0;

export default function counter(state= initialState, action) {
    switch(action.type){
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
    
}
