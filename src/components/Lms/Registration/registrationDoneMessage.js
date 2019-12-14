import React, {Component} from 'react'
import {connect} from 'react-redux'

class RegistrationDoneMessage extends Component {
    
    render(){

        const {user}=this.props

        return(
            <div>
                <article className="message is-success">
                    <div className="message-header">
                        <p>Registration was successful</p>
                    </div>
                    <div className="message-body">
                        Here is your code {user.code}
                    </div>
                </article>
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
export default connect(mapStateToProps)(RegistrationDoneMessage)


