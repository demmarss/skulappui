import React, {Component} from 'react'
import { connect } from 'react-redux'
import Record from './records'
import Profile from './profiles'
import SetUp from './setUps'
// import Analysis from './analysis'
import AdminLandingPage from './adminLandingPage'
import Finance from './Finance'
import AdminTab from './adminTab'
import  {handlingGetUsers, handleCreateUser, handleCreateUserAndAddToLearningGroup} from '../actions/users'
import { handleReceiveAllLgroups } from '../actions/learningCycle'


class Admin extends Component{
    state ={
        display: ''
    }

    setDisplay = (value) =>{
        this.setState({
            display: value
        })
    }
    componentDidMount(){
        const {dispatch, authedUser} = this.props
        if (authedUser){
            dispatch(handlingGetUsers())
            dispatch(handleReceiveAllLgroups())
        }
    }

    createUser =(user) =>{
        const {dispatch} = this.props
        
        //Join this if student to the lgroup
        if(user.role === 'Student'){
            dispatch(handleCreateUserAndAddToLearningGroup(user))
        }else{
            dispatch(handleCreateUser(user))
        }
    }

    render(){
        const {display} = this.state
        const {authedUser, user, learningCycle } = this.props
        return(
            <div className='container'>
                {authedUser? <React.Fragment>
            <AdminTab SetDisplay={this.setDisplay}/>
                    {display === ''? <AdminLandingPage users={user}/>:null}
                    {
                    display === 'setUp' ? <SetUp users={user} createUser = {this.createUser} LearningCycle={learningCycle} AuthedUser={authedUser}/>: null
                }
                    {
                    display === 'profile' ? <Profile users={user} LearningCycle={learningCycle}/>: null
                }
                    {
                    display === 'record' ? <Record users={user} LearningCycle={learningCycle}/>: null    //I have been changing user to users, my mistake fix later
                }
                    {
                    display === 'finance' ? <Finance users={user}/>: null
                } 
                 {/* {
                    display === 'academics' ? <Academics/>: null
                } */}
                </React.Fragment>: <p className="box has-background-primary has-text-warning">LogIn or SignUp to VIEW learning group </p>}
        </div>
        )
    }
}

function mapStateToProps({ authedUser, user, learningCycle}) {
    return {
      authedUser,
      user,
      learningCycle
    };
  }
  

export default connect(mapStateToProps)(Admin)