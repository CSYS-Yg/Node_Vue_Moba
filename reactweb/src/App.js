import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
function App() {
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    const name = {
        firstName: '123',
        lastName: '456',
    };
    const element = (<div> <Welcome name="Sara" /> <Welcome name="Sara1" /> <Welcome name="Sara2" /> </div>)
    setTimeout(() => {
        return ReactDOM.render(<h1>Hello, {formatName(name)}</h1>, document.getElementById('root'));
    }, 4000)
    return element


}

export default App;
