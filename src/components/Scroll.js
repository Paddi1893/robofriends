import React from "react";

//children
//every react component has a prop and children
//used to wrap other React components

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '5px solid black', height:"800px"}}>
            {props.children}
        </div>
    );    
}
export default Scroll;