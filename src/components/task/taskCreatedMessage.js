import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class TaskCreated extends Component {
render(){
    return (
        <div>
            <div className="notification is-success">
                <p>Your task has been created. </p>
            </div>
            <Link to={'/myTask'}>
            <button className="button">Back to class </button>
            </Link>
        </div>
    )
}
}