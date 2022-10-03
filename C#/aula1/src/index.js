import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './Feed';

const App = () => {
    return <div><Feed /></div>;
};


ReactDOM.render(<App />, document.querySelector("#root"));