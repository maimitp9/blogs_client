import React from 'react';
export default function Button(props) {
    return (
        <div>
            {/* create button with name props */}
            <button onClick={props.onClick}>{props.name}</button>
        </div>
    )
}
