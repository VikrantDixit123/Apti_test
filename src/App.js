import React from 'react';
import Header from './components/Header';

const App = (props) => (
    <React.Fragment>
        <Header content={props.children}/>        
    </React.Fragment>
);

export default App;
