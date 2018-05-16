import React from 'react';
import Body from './components/body';


class App extends React.Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this) // toggle button click

        this.state = {
            date: new Date(), // timer state
            isToggle: true, // toggle button state
        };

    }
    
    
    // set toggele button
    handleClick(name) {
        this.setState(prevState => ({
            isToggle: !prevState.isToggle
        }))
    }

    render(){
        return (
            <div className='container'>
                <Body />
                <button onClick={this.handleClick.bind(this,'meet')}> {/* toggle ON-OFF button*/}
                    {this.state.isToggle ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default App;