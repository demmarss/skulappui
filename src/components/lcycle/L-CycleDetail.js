import React, {Component} from 'react'
import { connect } from 'react-redux'

class LCycleDetail extends Component {
    render(){
        const {learningCycle} = this.props

        const lgroup = learningCycle.find(x=> x._id === this.props.match.params.lgroupId)

        return (
                <div className="notification is-success">  
                        
                    <h2 className="title is-4">Code: {lgroup.code}</h2>  
                                           
                    <p> {lgroup.task.length} tasks
                        <br/>
                        {lgroup.members.length} members
                        <br/>
                        Code: {lgroup.code}
                    </p>
                    
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
  

export default connect(mapStateToProps)(LCycleDetail)
