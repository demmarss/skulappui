import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleReceiveLgroups } from '../../actions/learningCycle';

class CreateSpellingTask extends Component {
    state = {
        word: '',
        words: [],
        lCycleTitle: '',
        notification: false,
        lgroupId: ""
    }

    // Provide the lgroups that the user already have
    componentDidMount(){
        const { authedUser, dispatch } = this.props
        if (authedUser){
            dispatch(handleReceiveLgroups(authedUser._id))
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

    onhandleChange = (e)=>{
        this.setState({
            word: e.target.value
        })
    }

    onAddWord=(e)=>{

        this.setState({
            words: this.state.words.concat([this.state.word])
        })

        e.target.reset()
        
        e.preventDefault()
      }
    
    onFinishSetTask =()=>{
        //To show notificaiton if lgroup is not changed
        if (this.state.lgroupId === ""){
            return this.setState({
                notification: true
            })
        }

        let questions = this.state.words;
        
        console.log('Here are the created questions', questions)
        
        this.props.Status('submit', questions,[], this.state.lgroupId)

      }

    render(){
        const { learningCycle } = this.props
        return (
            <div>
                <div>
                    {this.state.words.map(x=> <h1 className="title" key={x}>{x} </h1> )}
                </div>
                <br/>
                <form onSubmit={this.onAddWord}>
                    <input className='input is-primary' type='text' placeholder='enter word' onChange={this.onhandleChange}/>
                    <br/>
                    <br/>
                    <button className='button is-warning'type='submit' >Add word</button>
                </form>
                <br/>
                
                <br/>
                <div className="notification is-danger" hidden={!this.state.notification}>
                    <button className="delete"></button>
                   Please select  <strong>learning group</strong>
                </div>
                <div className="control">
                    <div className="select">
                        <select onChange={this.handleChange('lgroupId')}>
                        <option value={this.state.lgroupId} >Select learning group</option>
                        {learningCycle.map(x=>
                          <option value={x._id} key={x._id}>{x.lgtitle}</option>
                        )}
                        
                        </select>
                    </div>
                </div>

                <button className='button is-success' onClick={this.onFinishSetTask}>Create Task</button>
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

export default connect(mapStateToProps)(CreateSpellingTask)