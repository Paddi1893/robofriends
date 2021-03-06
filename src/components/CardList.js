import React from 'react';
import Card from'./Card.js';

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return <Card key={user.id} id={user.id} name={user.name} email={user.email} website={user.website}/>
                })   
            }
        </div>
    );
}

export default CardList;