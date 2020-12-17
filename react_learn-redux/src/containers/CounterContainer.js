import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/Counter'


function CounterContainer() {
    //useSelector는 리덕스 스토어의 상태를 조회하는 Hook
    //state의 값은 state.getState() 함수를 호출했을때 나타나는 결과물과 동일
    const {number, diff} = useSelector(state => ({
        number: state.Counter.number,
        diff : state.Counter.diff
    }));

    //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 hook
    const dispatch = useDispatch();
    //각 액션을 디스패치하는 함수 생성
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter
        number = {number}
        diff={diff}
        onIncrease = {onIncrease}
        onDecrease = {onDecrease}
        onSetDiff = {onSetDiff}
        />
    )
}

export default CounterContainer
