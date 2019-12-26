import React, {Component} from 'react'
import {apiUrlForImages} from '../../service/api'
// import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player'


export default class EvaluationScreen extends Component {

    state = {
        counter: 0,
        remark: "wrong",
        remarkArray: []
    }
  
    // I will use sideEffect to populate the audioArray with the user answer audio response

    handleNext=()=>{
        console.log(this.state.counter)
        this.setState({
            counter: this.state.counter+1,
            remarkArray: this.state.remarkArray.concat(this.state.remark)
        })
    }

    handleFinish=()=>{

        this.setState({
            remarkArray: this.state.remarkArray.concat(this.state.remark)
        })
        
        this.props.HandleFinish(this.state.remarkArray)

        
        console.log(this.state.remarkArray)
    }

    handleChange=(e)=>{
        this.setState({
            remark: e.target.value
        })
    }
    
    getUserAudioResponse=()=>{

        const {Task, User} = this.props

        const UserAnswer = Task.answerHistory.find((elm)=> elm[User._id])
        return(Object.values(UserAnswer)[0].audioResponse)
    }
    
    render(){
        const {Task} = this.props
        return(
        
            <div>
    
                {(this.state.counter < Task.questions.length)?
                      
                      (<article className="message is-link">
                      <div className="message-header">
                          <h1 className="title">Evaluation</h1>
                      </div>
                      <div className="columns">
                          <div className="column is-half">
                              <h1>Question</h1>
                              <figure className="image is-square">
                                  <img src={apiUrlForImages+"/uploads/"+Task.questions[this.state.counter].questionImageName} alt="Question"/>
                              </figure> 
                          </div>
                          
                          <div className="column is-half">
                                {/* Automatic play sound */}
                                <ReactPlayer
                                    url= {apiUrlForImages+"/uploads/audio/"+this.getUserAudioResponse()[this.state.counter]}
                                    playing
                                />
    
                                {/* {playRecording(Task.)} */}
    
                                {/* Check button should be here */}
                                <div className="control" onChange={this.handleChange}>
                                    <label className="radio">
                                        <input type="radio" name="answer" value="correct"/>
                                        Correct
                                    </label>
                                    <label className="radio">
                                        <input type="radio" name="answer" value="wrong" defaultChecked/>
                                        Incorrect
                                    </label>
                                </div>
                                
                              <p className="button is-danger" onClick={this.handleNext}>Next Question</p>
                          </div>
                      </div>
                  </article>)
              :<p className="button is-success " onClick={this.handleFinish}>Finished (Saving responses)</p>
          }
    
            </div>
        )
    }
   
}