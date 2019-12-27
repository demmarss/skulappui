import React, {Component} from 'react'
import { connect } from 'react-redux'
import EvaluationScreen from './evaluationScreen'
import { handleAddScoreHistorySecond } from '../../actions/tasks'

class EvaluationReadingOutPictures extends Component {

    state={
        task: {},
        user: {},
        openEvaluationScreen: false
    }

    goToEvaluationScreen =(userId)=>{
        let tasky = this.getTask(this.props.match.params.taskId)
        let userhere = this.getUser(userId)
        // const lgroup = this.getLgroup(this.props.match.params.lgroupId)

        this.setState({
            user: userhere,
            task: tasky,
            openEvaluationScreen: true
        })
    }


    getTask=(taskId)=>{
       const {task}= this.props
       let foundTask = task.find(t=> t._id === taskId)
        return foundTask
    }

    getUser=(userId)=>{
        const {user}= this.props
        const users = Object.keys(user).map(key=> user[key])
        let foundUser = users.filter(user=> user._id === userId)
         return foundUser[0]
     }

     handleFinish = (arrayCorrected) =>{

        const {dispatch } = this.props
        const tasky = this.getTask(this.props.match.params.taskId)
        let correctedQuestionArray = []

        for (let i=0; i<arrayCorrected.length; i++){
            if (arrayCorrected[i] === "correct") {
                correctedQuestionArray.push(i)
                }
             }
              
        dispatch(handleAddScoreHistorySecond(this.state.user._id, tasky._id, correctedQuestionArray ))
        
    }
    

    render(){

        const { user, authedUser }= this.props
      
        const users = user

        console.log(users)

        return(
            <div>
            
            {!this.state.openEvaluationScreen?
               ( (users.length > 0)?
                    users.map(user=>
                        <p className="button is-full" key={user._id} onClick={()=> this.goToEvaluationScreen(user._id)}>{user.username}</p>
                        // goingFoward
                        // I wil use taskId from params, to the task and the user Id to get the answer, 
                        // then, I will update the state task and the userId, pass it As Prop for the evaluation screen to use. 
                    )
                :
                <div>You don't have any users</div>
                )
                :<EvaluationScreen Task={this.state.task} User={this.state.user} WorkingUser = {authedUser} HandleFinish={this.handleFinish}/>
                }
        </div>
            )      
    } 
}

function mapStateToProps({authedUser, user, depatch, learningCycle, task}){
    return{
        authedUser,
        depatch,
        learningCycle,
        task,
        user
    }
}

export default connect(mapStateToProps)(EvaluationReadingOutPictures)