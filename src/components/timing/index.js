import React, { Component } from 'react'
import NumberPad from './numberPad'
import { connect } from 'react-redux'
import { handlingGetUsers } from '../actions/users'


class Timing extends Component {

    componentDidMount(){
        const {dispatch, authedUser} = this.props
        if (authedUser){
            dispatch(handlingGetUsers())
        }
    }

    render(){
        
        const {authedUser, user} = this.props

        return(
            <div>
                 {authedUser?
                    <div className="hero is-primary is-bold is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title is-1">
                                School Timing/Attendance
                            </h1>
                            <h2 className="subtitle">
                                Kindly enter your personal code to time in or out
                            </h2>
                            <NumberPad users={user}/>
                        </div>
                    </div>
                    
                </div>: <p className="box has-background-primary has-text-warning">LogIn or SignUp to VIEW learning group </p>}
                    
                         
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
  

export default connect(mapStateToProps)(Timing)