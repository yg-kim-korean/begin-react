import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../components/Counter'
import { decrease, decreaseAsync, increase, increaseAsync } from '../modules/counter'

function CounterContainer() {
    const number = useSelector(state => state.counter)
    const dispatch = useDispatch()
    //thunk 적용한걸로 변경
    const onIncrease = () => {
        // dispatch(increase())
        dispatch(increaseAsync())
    }
    const onDecrease = () => {
        // dispatch(decrease())
        dispatch(decreaseAsync())
    }
    return (
        <Counter number={number} onDecrease={onDecrease} onIncrease = {onIncrease} />
    )
}

export default CounterContainer
