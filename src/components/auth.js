import React from 'react';
import Greetings from './greetings';
import Button from './button';

class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this) // login button click
        this.handleLogoutClick = this.handleLogoutClick.bind(this) // logout button click
        this.state = {
            isLoggedIn: false // login, logout button
        };
    }
    
     // Login Control 
     handleLoginClick() {
        this.setState({
            isLoggedIn: true
        })
    }

    // Logout Control 
    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const button = isLoggedIn ? (
            // if user logged-in
            <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
            // if user not logged in
            <LoginButton onClick={this.handleLoginClick} />
        )

        return(
            <div>
                {button} {/* get login, logout button based on logged-in user */}
                <Greetings isLoggedIn={isLoggedIn} name='Maimit' /> {/* set greetings message when logged-in user or guest user */}
            </div>
        )
    }
}

// login component
function LoginButton(props) {
    return (
        <div>
            {/* call button component to generate Login */}
            <Button name='Log in' onClick = {props.onClick} />
        </div>
    )
}

// logout component
function LogoutButton(props) {
    return (
        <div>
            {/* call button component to generate Logout */}            
            <Button name='Log out' onClick = {props.onClick} />
        </div>
    )
}
export default Auth;