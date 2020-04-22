import React from "react";
const UserCard = (props) =>{

    return(
        <div>
            {props.teamMembers.map(card=>(
                <div key={card.id}>
                    <h2>{card.name}</h2>
                    <h2>{card.email}</h2>
                    <h2>{card.role}</h2>
                </div>
            ))}
        </div>
    )
}

export default UserCard