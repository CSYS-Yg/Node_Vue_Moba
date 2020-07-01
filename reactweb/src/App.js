import React from 'react';
import './App.css';

function App() {
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    const name = {
        firstName: '123',
        lastName: '456',
    };
    const element = <h1>Hello, {formatName(name)}</h1>;
    return (
        element
    );
}

export default App;
