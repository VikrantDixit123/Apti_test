import React from 'react';

/**
 * This is the primary error boundary for the app.
 * Any errors that occur on the app are trapped here.
 * Read more about Error boundry: https://reactjs.org/docs/error-boundaries.html 
 */
class ErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorHandler;