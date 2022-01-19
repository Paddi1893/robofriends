import React from "react";

const SearchBox = ({searchfield, searchChange}) =>{  //the props are received
    return (
        <div className="pa2">
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search robots"
            onChange={searchChange} //onChange is basic HTML -> with the function we passed
            />
        </div>
    );
}

export default SearchBox;