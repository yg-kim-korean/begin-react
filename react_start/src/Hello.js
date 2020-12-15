import React, { Component } from 'react'

// export default function Hello({color, name,isSpecial}) {
    
    
//     return (
//         <div style={{color}}>
//             {isSpecial && <b>*</b>}
//             안녕하세요 {name}
//         </div>
//     )
    
// }
// Hello.defaultProps={
//     name:'이름없음'
// }
export class Hello extends Component {
    static defaultProps={
                 name:'이름없음'
    };
    render() {
        const {color, isSpecial, name} = this.props;
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}

export default Hello