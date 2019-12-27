import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleCreateLgroup } from '../actions/learningCycle'

class CreateLCForm extends Component {

    state = {
        lgtitle: '',
        successful: false
      };
    
      handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

      handleSubmit = e => {
        e.preventDefault();
        const { lgtitle } = this.state;
        const { dispatch } = this.props;
    
        dispatch(handleCreateLgroup(lgtitle));

        this.setState({
            successful: true,
            lgtitle: ''
        })
      };

      isEmpty() {
        return this.state.lgtitle === "";
      }

    render (){
          const { authedUser } = this.props

        return (
            <div>
                {authedUser? 
                !this.state.successful?
                <form onSubmit={this.handleSubmit}>
                    <article className="message is-success">
                        <div className="message-header">
                            <p>Create L-Cycle</p>
                        </div>
                        <div className="message-body">
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="text" onChange={this.handleChange('lgtitle')} placeholder="Enter L-cycle title"/>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control">
                                    <button type='submit' className="button is-warning" disabled={this.isEmpty()}>
                                    Click to Create
                                    </button>
                                </p>
                            </div>  
                        </div>
                    </article>
                </form>: null
                :
                <p className="box has-background-grey-lighter has-text-danger">LogIn or SignUp to CREATE learning group </p>
                }
            {this.state.successful?   
                <div className='box'>
                    <p>Your learning group has been successfully created</p>
                    <Link to='/myClass'>
                    <button className="button">Go to your group</button>
                    </Link>
                </div>: null}
            </div>
        )
    }
}

function mapStateToProps({ authedUser}) {
    return {
      authedUser
    };
  }

export default connect(mapStateToProps)(CreateLCForm)