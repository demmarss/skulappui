import React, { Component } from 'react'
import { Line } from 'rc-progress';
import { connect } from 'react-redux'
import { handleAddAudioResponses } from '../../actions/tasks'
import {apiUrlForImages} from '../../service/api'
import AudioScreen from './audioScreen'
import CountDownToNextQuestion from './countDownToNextQuestion'
import DisplayFinishInfo from './displayFinshInfo'


class ReadingTextOutQuestion extends Component {

    state = {
        displayResult: true,
        counter: 0,
        startTime: Date.now(),
        endTime: Date.now(),
        progress: 0,
        submit: true,
        blobURLArray: [],
        task: {}, 
        questionOn: false
    }

    resetState = () => {
        this.setState({
        displayResult: true,
        counter: 0,
        startTime: Date.now(),
        endTime: Date.now(),
        progress: 0,
        submit: true,
        blobURLArray: [],
        task: {}
        })
    }

    getTask =(taskId) =>{
        const { task } = this.props
        let taskyyy = task.find(t => t._id === taskId)
        return taskyyy
    }

    handleSubmit = (fd) =>{
        const tasky = this.getTask(this.props.match.params.taskId)
        const {dispatch } = this.props
        dispatch(handleAddAudioResponses(tasky._id, fd ))

        this.setState({
            progress: (this.state.counter + 1) *100/tasky.questions.length,
            counter: this.state.counter + 1,
            questionOn: false,
            submit: true,
            endTime: Date.now()
        })
    }
    
    handleFinish = (e) =>{
        const {dispatch } = this.props
        const tasky = this.getTask(this.props.match.params.taskId)
        this.setState({
            displayResult: false,
            task: tasky
        })
    }

    counter = (e) => {
        this.setState({
            questionOn: true
        })
    }

    getTimeDuration = () => {
        let duration = this.state.endTime - this.state.startTime
        return this.secondsToHms(Math.floor(duration/1000))
    }
    
    secondsToHms=(d)=> {
    
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h > 0 ? h + (h === 1 ? " h, " : " h ") : "";
        var mDisplay = m > 0 ? m + (m === 1 ? " min, " : " min ") : "";
        var sDisplay = s > 0 ? s + (s === 1 ? " s" : " s") : "";
        return hDisplay + mDisplay + sDisplay; 
    }

    render (){
        let tasky = this.getTask(this.props.match.params.taskId)

        const {authedUser}= this.props

        let {counter}= this.state
                
        return (
            <div>
                {authedUser?
                <div>
                    {( this.state.displayResult)? <Line percent={this.state.progress} strokeWidth="4" strokeColor="#ff45ff" />: null}
                {(counter < tasky.questions.length)?
                  
                            (<article className="message is-link">
                            <div className="message-header">
                                <p>Time spent : {this.getTimeDuration()}</p>          
                            </div>
                            <div className="columns">
                                <div className="column is-half">
                                    <h1>Question</h1>
                                    <figure className="image is-square">
                                        <img src={apiUrlForImages+"/uploads/"+tasky.questions[counter].questionImageName} alt="Question"/>
                                    </figure> 
                                </div>
                                
                                <div className="column is-half">

                                    {this.state.questionOn?
                                        (<AudioScreen HandleSubmit = {this.handleSubmit}/>)
                                            : <CountDownToNextQuestion Counter={this.counter}/>
                                    }
                                </div>
                            </div>
                        </article>)
                    :( this.state.displayResult)? <p className="button is-success " onClick={this.handleFinish}>Finished (Saving responses)</p>: null
                }
                {!this.state.displayResult? <DisplayFinishInfo />: null }
                </div>
                :<p>Login or Registration required</p>}
                
            </div>
        )    
    }

}

function mapStateToProps({authedUser, depatch, learningCycle, task}){
    return{
        authedUser,
        depatch,
        learningCycle,
        task
    }
}

export default connect(mapStateToProps)(ReadingTextOutQuestion)

