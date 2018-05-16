import React from 'react';

class Greetings extends React.Component {

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        const name = this.props.name;
        return (
           <div>
               {
                    isLoggedIn ? (
                        <UserGreetings name={name} />
                    ) : (
                        <GuestGreetings name='Guest' />
                    )
                }
            </div>
        )
    }
}


//  logged-in user greetings
function UserGreetings(props) {
    return (
        <GreetingMessage name={props.name} />
    )
}

//  Guest user greetings
function GuestGreetings(props) {
    return (
        <GreetingMessage name={props.name} />        
    )
}

// greetings message
function GreetingMessage(props) {
    return (
        <h1>Welcome {props.name}!</h1>
    )
}

export default Greetings;