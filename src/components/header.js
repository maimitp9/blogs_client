import React from 'react';
import Auth from './auth';
import Clock from './timer';

class Header extends React.Component {
    render() {
        return(
            <div>
                <Clock />
                <Auth />
            </div>
        )
    }
}

export default Header;