import React, { Component } from 'react'
import LandingPage from './landingPage'
import { connect } from 'react-redux'
import { handlingGetUsers } from '../components/actions/users'
import NavBar from '../NavBar'


class Home extends Component{

    componentDidMount(){
        const {dispatch, authedUser} = this.props
        if (authedUser){
            dispatch(handlingGetUsers())
        }
    }

render(){

    const {authedUser, user } = this.props

    return (
        <LandingPage AuthedUSer={authedUser} users={user}/>
    )
}
}

function mapStateToProps({ authedUser, user}) {
    return {
      authedUser,
      user
    };
  }
  

export default connect(mapStateToProps)(Home)