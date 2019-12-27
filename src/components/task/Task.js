import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AssignedGroups from './assignedGroups'

export default class Task extends Component {

    state = {
        lgroupId: "",
        assignedGroup: "",
        showAssign: false
    }

    handleChange = prop => event =>{
        this.setState({
            [prop]: event.target.value
        })
    }

    getLgTitleArray = () =>{
        
        const { learningCycle, task } = this.props

        let result =[]
        
        task.lgroupId.map(lgroupId => {
            let lg = learningCycle.find(x=> x._id === lgroupId)
            if (lg !== undefined) {result.push(lg)}
        })
       
        return result
    }

    seeQuestions = (userType)=>{
        if (userType === 'Teacher' || userType === 'Admin'){
            return true
        }
        return false
    }

    render(){
        const {task, handleDelete, assigningLgroup, unAssignedTask, user, learningCycle } = this.props

        let lgArray = this.getLgTitleArray()
        
        return (           
                 
                <div className="columns is-mobile is-centered">
          <div className="column is-half">
                    <div className='notification is-info' key={task._id}>
                        {user._id === task.user? 
                        <button className="delete" onClick={()=>handleDelete(task._id)}/>:
                        null
                        }
                        <h2 className="title is-4">{task.topic}</h2>  
                        <p>{task.questions.length} questions</p>


                        <Link to ={'/task/'+task._id} > Click to see detail</Link>
                        <hr/>
                        {this.seeQuestions(user.role)?
                            <div className="columns"> 
                                <div className="column"> 
                                
                                    <form >
                                        Please select  <strong>learning group</strong>
                                        <div className="control">
                                            <div className="select">
                                                <select onChange={this.handleChange('lgroupId')}>
                                                    <option value={this.state.lgroupId} >Select learning group</option>
                                                    {learningCycle.map(x=>
                                                    <option value={x._id} key={x.lgtitle}>{x.lgtitle}</option>
                                                    )}
                                                </select>
                                            </div>
                                            <p className="button is-success" onClick={()=> assigningLgroup(task, this.state.lgroupId)}>Assign Learning Group</p>
                                        </div>
                                        
                                    </form>
                                </div>
                                <div className="column is-4"> 
                                        <p>Learning Group</p>
                                        {
                                            lgArray.map(lg=><AssignedGroups key={lg._id} Task={task} Lgroup={lg} UnAssignedTask={unAssignedTask}/>)
                                         }
                                        
                                </div>
                                
                            </div>: 
                            <Link className="button is-warning" to={"/"+task.topic+"question/"+task._id}>
                                Click to start
                            </Link>
                        }
                        
                    </div>
                </div>
                </div>
        )
    }
}





                     