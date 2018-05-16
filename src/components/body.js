import React from 'react';
import Header from './header';
import Counter from './counter';

class Body extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Counter />
            </div>
        )
    }
}

export default Body;