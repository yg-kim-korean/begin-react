import React from 'react'

export default function CreateUser({username,email,onChange,onCreate}) {
    return (
        <div>
            <input 
                name="username"
                type = "text"
                placeholder="계정명"
                onChange={onChange}
                value={username} />
            <input 
                name="email"
                type="email"
                placeholder="이메일"
                onChange={onChange}
                value={email} />
                <button onClick={onCreate}>등록</button>
        </div>
    );
}
