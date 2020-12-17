import React, { useEffect } from 'react'

export default function HistorySample({history}) {
    const goBack = () => {
        history.goBack();
    }

    const goHome = () =>{
        history.push('/');
    };

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠날건가유');
        return () => {
            unblock();
        }
    },[history]);
    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    )
}
