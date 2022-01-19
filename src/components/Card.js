import React from "react";
import './Card.css';

const Card = ({name ,email, id, website}) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?size=200x200`}/>
            <div id="div1">
                <a href={website}><h2>{name}</h2></a>
                <p>{email}</p>
                {/* {
                    console.log(name, email, id, website)
                } */}
            </div>
        </div>
    );
}

export default Card;