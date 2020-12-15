// import React, { useState } from 'react'

// export default function Counter() {
//     const [number, setNumber] = useState(0)
//     const onInclease =() => {
//         setNumber(prevenumber => prevenumber +1);
//     }
//     const onDeclease = () => {
//         setNumber(prevenumber => prevenumber +1);
//     }
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onInclease}>+1</button>
//             <button onClick={onDeclease}>-1</button>
//         </div>
//     )
// }
// import React, { useReducer } from 'react' //useReducer 사용

// function reducer(state, action) {
//     switch (action.type){
//         case 'INCREMENT':
//             return state+1
//         case 'DECREMENT' :
//             return state-1
//         default:
//             return state
//     }
    
// }


// export default function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0)
//     const onInclease =() => {
//         dispatch({type:'INCREMENT'});
//     }
//     const onDeclease = () => {
//         dispatch({type:'DECREMENT'});
//     }
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onInclease}>+1</button>
//             <button onClick={onDeclease}>-1</button>
//         </div>
//     )
// }

import React, { Component } from 'react'


export class Counter extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         counter : 0
    //     };
    // }
    state = {
        counter:0
    }
    handleInclease = () => {
        this.setState({
            counter:this.state.counter+1
        });
    };
    handleDeclease = () => {
        this.setState({
            counter:this.state.counter-1
        });
    };
   
    render() {
        return (
        <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.handleInclease}>+1</button>
            <button onClick={this.handleDeclease}>-1</button>
        </div>
        )
    }
}

export default Counter
