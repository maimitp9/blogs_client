import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    // call whenener component rendered to the DOM for the first time.
    // this hook runs after the component output has been rendered to the DOM
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    //  call whenever the DOM produced by the Component is removed
    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    //  set timer
    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1> {/* timer */}                
            </div>
        )
    }
}

export default Clock;