import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InputSample'
import UserList from './UserList'
import React , {useRef, useState} from 'react'
import CreateUser from './CreateUser'
function App() {
  const [inputs,setInputs] = useState({
    username:'',
    email:''
  })
  const { username, email} = inputs
  const onChange = e =>{
    const {name,value} = e.target
    setInputs({
      ...inputs,
      [name] : value
    });
  };
  const [users,setUsers]=useState([
    {id : 1, username:'v', email:'ksdfi@naver.com'},
    {id : 2, username:'m', email:'ksdfqwdi@naver.com'},
    {id : 3, username:'c', email:'wqwdi@naver.com'},
]);

  const nextId = useRef(4);
  const onCreate= () =>{
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users,user]);

    setInputs({
      username:'',
      email:''
    })
    nextId.current+=1;//useRef 사용시에는 current를 써서 지금 값을 찾아서 변경해줘야한다.
  };
  const onRemove = (id) =>{
    setUsers(users.filter(user => user.id !== id ))
  }
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}  />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
