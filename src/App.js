import React, { Component } from 'react';
import './App.css';
import {Login} from "./component/Login";

localStorage.setItem('username','Daniela');
localStorage.setItem('password','cosw2019');

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Login/>
                </header>
            </div>
        );
    }

    handleLogin(e) {
        if (this.state.username === localStorage.getItem('username') && this.state.password === localStorage.getItem('password')){
            alert('Logged');
        }else{
            console.log('Incorrect username or password');
        }
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }
}

export default App;
