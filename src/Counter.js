import React, { useState } from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0)
    const onInclease =() => {
        setNumber(prevenumber => prevenumber +1);
    }
    const onDeclease = () => {
        setNumber(prevenumber => prevenumber +1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onInclease}>+1</button>
            <button onClick={onDeclease}>-1</button>
        </div>
    )
}
