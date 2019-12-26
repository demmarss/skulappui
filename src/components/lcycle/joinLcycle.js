import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { handleJoinLgroup } from '../actions/learningCycle'

class JoinLCForm extends Component {
    state = {
        lgCode: '',
        toHome: false
      };
    
      handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };


    
      handleSubmit = e => {
          
        e.preventDefault();

        const { lgCode } = this.state;
        const { dispatch } = this.props;
    
        dispatch(handleJoinLgroup(lgCode));
    
        this.setState(currentState => ({
          toHome: currentState.username ? true : false
        }));

      };

      isEmpty() {
        return this.state.lgCode === "";
      }
    render (){
        const { authedUser } = this.props
        return (
            <div>
                {authedUser? <form className="form">
                    <article className="message is-primary">
                        <div className="message-header">
                            <p>Join L-Cycle</p>
                        </div>
                        <div className="message-body">
                        <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="text" placeholder="Enter L-cycle Code" onChange={this.handleChange('lgCode')}/>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control">
                                    <Link to={'/myClass'}>
                                    <button type="submit" onClick={this.handleSubmit} className="button" disabled={this.isEmpty()}>
                                    Click to Join
                                    </button>
                                    </Link>
                                </p>
                            </div>  
                        </div>
                    </article>
                </form>:
                <p className="box has-background-primary has-text-warning">LogIn or SignUp to JOIN learning group </p>
            }
            </div>
        )
    }
}

function mapStateToProps({ authedUser}) {
    return {
      authedUser
    };
  }

export default connect(mapStateToProps)(JoinLCForm)