import React, {Component} from 'react'
import { connect } from 'react-redux'
import LCycle from './LCycle'
import { handleDeleteLgroup, handleReceiveLgroups } from '../actions/learningCycle'


class TaskList extends Component {
    componentDidMount(){
        const {dispatch, authedUser} = this.props
        if (authedUser){
            dispatch(handleReceiveLgroups(authedUser._id))
        }
        
    }

    handleDelete=(lgroupId)=>{

        const { dispatch } = this.props

        dispatch(handleDeleteLgroup(lgroupId))
    }


    render(){

        const { authedUser, learningCycle } = this.props

        return (
            <div className="columns is-mobile is-centered">
          <div className="column is-half">

                    {authedUser?
                        learningCycle.length ===0 ?  
                        <div className="notification is-warning">
                            <p>No learning group or class found </p>
                            <br></br>
                            <button className='button'>Click to create learning group </button>
                        </div>: 
                        learningCycle.map(lgroup =>
                            <LCycle handleDelete={this.handleDelete} lgroup={lgroup} key={lgroup._id}/>            
                        ): 
                    <p className="box has-background-primary has-text-warning">LogIn or SignUp to VIEW learning group </p>
                
                }
            </div>
            </div>
        )
    }
}
function mapStateToProps({ authedUser, learningCycle}) {
    return {
      authedUser,
      learningCycle
    };
  }
  

export default connect(mapStateToProps)(TaskList)