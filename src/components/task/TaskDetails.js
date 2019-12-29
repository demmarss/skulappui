import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class TaskDetail extends Component {

    

    render(){

        const { authedUser, task } = this.props
        const taskhere = task.find(x=> x._id === this.props.match.params.taskId)
        
        return (
            <div>
                {authedUser?
                    <div className="card">  
                        <header className="card-header">    
                            <h2 className="title is-4"> {taskhere.topic} </h2>  
                        </header>
                        <div className="card-content">    
                            <p>Some details here</p>
                            <p>Some details here</p>
                            <p>Some details here</p>
                        </div>
                        <Link className="button is-warning" to="/question">
                            Click to start
                        </Link>
                    </div>
                    :
                    <p className="box has-background-primary has-text-warning">LogIn or SignUp to VIEW learning group </p>
                }                
            </div>
        )
    }
}
function mapStateToProps({authedUser, depatch, learningCycle, task}){
    return{
        authedUser,
        depatch,
        learningCycle,
        task
    }
}

export default connect(mapStateToProps)(TaskDetail)