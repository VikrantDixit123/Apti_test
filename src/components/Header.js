import React from 'react';


const Header = (props) => {
    return (
        <React.Fragment>
            <div className = "header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#"><img className = "xoriant-image" src="./123.png" alt="Xoriant"></img></a>                    
                </nav>                
            </div>
            {props.content}
        </React.Fragment>
    );
};

export default Header;