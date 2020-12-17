import React, { useState } from 'react'

//컴포넌트 최적화를 위해 React.memo 사용
const TodoItem = React.memo(function TodoItem({todo, onToggle}){
    return (
        <li
            style={{textDecoration: todo.done ? 'line-through' : 'none'}}
            onClick={ () => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );
});
const TodoList = React.memo(function TodoList({todos, onToggle}){
    console.log(todos);
    return (
        <ul>
            {
                todos.map(todo =>
                    <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
                )
            }
        </ul>
    );
});


function Todos({todos, onCreate, onToggle}) {
    const [text,setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onCreate(text);
        setText('')
    };
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                value={text}
                placeholder="할 일을 입력하세요"
                onChange = {onChange}
                />
                <button type="submit">등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    )
}

export default Todos
