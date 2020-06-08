import React from 'react';
import Footer from './Footer'

const Header = (props) => {
    return (
        <React.Fragment>
            <div className = "header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img className = "xoriant-image" src="./123.png" alt="Xoriant"></img>                   
                </nav>                
            </div>
            {props.content}
            <Footer /> 
        </React.Fragment>
    );
};

export default Header;