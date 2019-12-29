import React, {Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {handleDeleteTask} from '../actions/tasks'
import Progress from './question'


class ProgressList extends Component {

    handleDelete = (taskId) =>{

        const { dispatch } = this.props
        
        dispatch(handleDeleteTask(taskId))
    }


    render(){
        const { authedUser, task } = this.props
        return (
            <div>
                {authedUser?
                    task.length ===0 ?  
                    <div className="notification is-warning">
                        <p>No learning task found </p>
                        <br></br>
                        <Link to={'/creatTaskLandingPg'}>
                            <button className='button'>Click to create task</button>
                        </Link>
                        
                    </div>:
                    task.map(task=> 
                        <Progress handleDelete={this.handleDelete} taskSingle={task} />            
                    ) :
                    <p className="box has-background-success has-text-warning">Please login or signup</p>}
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, task}){
    return {
        authedUser,
        task
    }
}

export default connect(mapStateToProps)(ProgressList)