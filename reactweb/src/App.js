import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
function App() {
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    const name = {
        firstName: '123',
        lastName: '456',
    };
    const element = <h1>Hello, {formatName(name)}</h1>;
    setTimeout(() => {
        return ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));
    }, 4000)
    return element


}

export default App;
