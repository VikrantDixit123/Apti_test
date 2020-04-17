import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = (props) => (
    <React.Fragment>
        <Header content={props.children}/>
        <Footer />
    </React.Fragment>
);

export default App;
