import React, { useRef, useState } from 'react'

export default function InputSample() {
    const [inputs,setInputs] = useState({
        name: '',
        nik : ''
    });
    const nameInput = useRef();
    const {name,nik} = inputs;
    const onChange = (e) => {
        const {value,name} = e.target;
        setInputs(
            {
            ...inputs,
            [name]: value});
    }
    const onReset = () =>{
        setInputs({
            name: '',
            nik : ''
        })
        nameInput.current.focus();
    }
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nik" placeholder="닉네임" onChange={onChange} value={nik}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :  </b>
                {name} ({nik})
            </div>
        </div>
    )
}
