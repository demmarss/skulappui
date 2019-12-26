import React, {Component} from 'react'
import { connect } from 'react-redux'
import Record from './records'
import Profile from './profiles'
import SetUp from './setUps'
// import Analysis from './analysis'
import AdminLandingPage from './adminLandingPage'
import Finance from './Finance'
import AdminTab from './adminTab'
import  {handlingGetUsers, handleCreateUser} from '../actions/users'


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
        }
    }

    createUser =(user) =>{
        const {dispatch} = this.props
        dispatch(handleCreateUser(user))



        
    }

    render(){
        const {display} = this.state
        const {authedUser, user} = this.props

        console.log('Users at admin index', user)
        return(
            <div className='container'>
                {authedUser? <React.Fragment>
            <AdminTab SetDisplay={this.setDisplay}/>
                    {display === ''? <AdminLandingPage users={user}/>:null}
                    {
                    display === 'setUp' ? <SetUp users={user} createUser = {this.createUser}/>: null
                }
                    {
                    display === 'profile' ? <Profile users={user}/>: null
                }
                    {
                    display === 'record' ? <Record users={user}/>: null
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

function mapStateToProps({ authedUser, user}) {
    return {
      authedUser,
      user
    };
  }
  

export default connect(mapStateToProps)(Admin)