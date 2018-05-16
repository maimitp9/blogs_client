import React from 'react';
import Button from './button';
import '../index.css';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        const numberCounter = 1;
        this.state = {
            list: [
                {
                    id: numberCounter,
                    createdAt: new Date()
                }
            ],
            numberCounter: numberCounter
        }
        this.sortByEarliest = this.sortByEarliest.bind(this);
        this.sortByLatest = this.sortByLatest.bind(this);
        this.addToStart = this.addToStart.bind(this);
        this.addToEnd = this.addToEnd.bind(this);
    }

    sortByEarliest() {
        const sortedList = this.state.list.sort((a,b) => {
            return a.createdAt - b.createdAt;
        })
        this.setState({
            list: [...sortedList]
        })
    }

    sortByLatest() {
        const sortedList = this.state.list.sort((a,b) =>{
            return b.createdAt - a.createdAt
        })

        this.setState({
            list: [...sortedList]
        })
    }

    addToStart() {
        const nextId = this.state.numberCounter + 1;
        const date = new Date();
        const newList = [
            {id: nextId, createdAt: date},
            ...this.state.list
        ]
        this.setState({
            list: newList,
            numberCounter: nextId            
        })
    }

    addToEnd() {
        const nextId = this.state.numberCounter + 1;
        const date = new Date();
        const newList = [
            ...this.state.list,
            {id: nextId, createdAt: date}
        ]
        this.setState({
            list: newList,
            numberCounter: nextId
        })
    }

    

    render() {
        const list = this.state.list;
        return(
            <div>
                <ul>
                    <li><Button onClick={this.addToStart} name='Add to Start' /></li>
                    <li><Button onClick={this.addToEnd} name='Add to End' /></li>
                    <li><Button onClick={this.sortByEarliest} name='Sort by Earliest' /></li>
                    <li><Button onClick={this.sortByLatest} name='Sort to Latest' /></li>
                </ul>
                <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <ItrateList key={item.id} {...item} />
                        ))}
                    </tbody>
                </table>
                </div>
                
            </div>            
        )
    }
}

function ItrateList(props) {
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.createdAt.toTimeString()}</td>
        </tr>
    )
}

export default Counter;