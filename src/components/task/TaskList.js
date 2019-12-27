import React, {Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {handleDeleteTask, handleReceiveTasks, handleAssignLgroup, handleRemoveAssignLgroup} from '../actions/tasks'
import {handleReceiveLgroups} from '../actions/learningCycle'
import Task from './Task'


class TaskList extends Component {

    componentDidMount(){
        const {dispatch, authedUser} = this.props
        if (authedUser){
            
            dispatch(handleReceiveTasks(authedUser._id))

            dispatch(handleReceiveLgroups(authedUser._id))

        }
    }
    

    handleDelete = (taskId) =>{

        const { dispatch } = this.props
        
        dispatch(handleDeleteTask(taskId))
    }

    handleAssignLg = (task, lgroupId) => {

        const { dispatch } = this.props

        dispatch(handleAssignLgroup(task._id, lgroupId))
    }

    unAssignedTask=(taskId, lgroupId)=>{
        const { dispatch} = this.props
        dispatch(handleRemoveAssignLgroup(taskId, lgroupId))
    }

    render(){
        const { authedUser, task, learningCycle } = this.props
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
                        <Task 
                            handleDelete={this.handleDelete} 
                            task={task}
                            key={task._id} 
                            assigningLgroup={this.handleAssignLg} 
                            unAssignedTask={this.unAssignedTask}
                            user = {authedUser}
                            learningCycle = {learningCycle}
                        />            
                    ) :
                    <p className="box has-background-success has-text-warning">Please login or signup</p>}
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, task, learningCycle}){
    return {
        authedUser,
        task,
        learningCycle

    }
}

export default connect(mapStateToProps)(TaskList)