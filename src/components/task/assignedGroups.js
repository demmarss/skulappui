import React, {Component} from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { handlingGetListOfUsers } from '../actions/users';


class AssignedGroups extends Component{

    state ={
        redirect: false,
        TaskTopic: "",
        TaskId: "",
        LgroupId: ""

    }
    
    goToMyEvaluation = (TaskTopic, TaskId, LgroupId )=>{
        
        const {dispatch, Task, Lgroup }=this.props

        let userIdArray = this.checkIfEvaluationIsAvailable(Task, Lgroup)
        // Dispatch action to get array of user
        dispatch(handlingGetListOfUsers(userIdArray))

        this.setState({
            redirect: true,
            TaskTopic,
            TaskId,
            LgroupId
        })
    }

    checkIfEvaluationIsAvailable = (task, group)=> {
        // if and then statement
        let commonUserArray=[]
        let allUserAnswerArray = []

        for(let i=0; i<task.answerHistory.length; i++){
            allUserAnswerArray = allUserAnswerArray.concat(Object.keys(task.answerHistory[i]))
        }
        
        allUserAnswerArray.map(user=> {
            group.members.map(member=> {
                if (user === member){
                    commonUserArray.push(user)
                }
            })
        })

        return commonUserArray
        }


        render(){
            const {Task, Lgroup, UnAssignedTask} = this.props

            if (this.state.redirect) {

                // return <Redirect to={"/"+this.state.TaskTopic+"evaluation/"+this.state.TaskId+"/"+this.state.LgroupId} />;
                return <Redirect to={"/evaluation/"+this.state.TaskId}/>;
                
              }

            return(
                <div className="field is-horizontal">
                    <p className="subtitle has-margin-right-10" style={{ margin: 5 }}>{Lgroup.lgtitle}</p>
                    {this.checkIfEvaluationIsAvailable(Task, Lgroup).length>0? 
                        <p className="button is-warning" onClick={()=>this.goToMyEvaluation(Task.topic, Task._id, Lgroup._id )} >
                            Evaluate
                        </p>              
                        
                        :null}
        
                    <button className="delete" onClick={()=> UnAssignedTask (Task._id, Lgroup._id )}/>
                </div>
            )
        }       
    
}

function mapStateToProps ({ dispatch}){
    return {
        dispatch
    }
}

export default connect(mapStateToProps)(AssignedGroups)