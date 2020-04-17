import React from 'react';


const Header = (props) => {
    return (
        <React.Fragment>
            <header className="header">
                <img src="./100.png" alt="Xoriant"></img>                
            </header>
            {props.content}
        </React.Fragment>
    );
};

export default Header;