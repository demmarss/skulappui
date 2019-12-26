import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

class LCycle extends Component {
    
    render(){
        const {lgroup, handleDelete, authedUser } = this.props

        return (
            <div className="box">
                <div className="notification is-info">
                        {authedUser._id === lgroup.authorId? 
                        <button className="delete" onClick={()=>handleDelete(lgroup._id)}/>:
                        null
                        }
                        
                        <h2 className="title is-4">{lgroup.lgtitle}</h2>   
                            <p> 
                                Code: {lgroup.code}
                            </p>
                    <Link to={"/lgroups/"+ lgroup._id}>
                        <p>Click here for detail</p>
                    </Link>  
                </div>
            </div>
        )
    }
}
function mapStateToProps({ authedUser, learningCycle}) {
    return {
      authedUser
    };
  }
  

export default connect(mapStateToProps)(LCycle)
