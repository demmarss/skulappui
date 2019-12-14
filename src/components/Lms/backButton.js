import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleGetLMSUsers } from '../actions/users';

class  BackButton extends Component {

handleBack = ()=>{

    const {dispatch, setStatus }= this.props
    console.log("I should invoke")

    dispatch(handleGetLMSUsers())

    setStatus("")

}

render(){
    return(
        <p className="button is-large is-warning" 
            onClick={this.handleBack}> Back </p>
        )}    
}
function mapStateToProps({ dispatch, authedUser, user}) {
    return {
      authedUser,
      user,
      dispatch
    };

  }
  export default connect(mapStateToProps)(BackButton)