import React from 'react'

const profileData ={
    valopert:{
        name: 'yg',
        description:'dddd'
    },
    gildong:{
        name:'gil',
        description:'dong'
    }
};

export const Profile = ({match}) => {
    //파라미터를 받을때는 match 안에 들어있는 params 값 참조
    const {username} = match.params;
    const profile = profileData[username];
    if (!profile){
        return <div>존재 하지 않음</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}
