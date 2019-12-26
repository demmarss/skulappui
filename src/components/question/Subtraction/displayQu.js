import React, { Component } from 'react'
import { Line } from 'rc-progress';
import { connect } from 'react-redux'
import { handleAddScoreHistory } from '../../actions/tasks'
import DisplayResult from './displayResult'


class QuestionDisplay extends Component {

    state = {
        displayResult: true,
        answer: Number,
        counter: 0,
        startTime: Date.now(),
        endTime: Date.now(),
        progress: 0,
        submit: true,
        answerArray: [],
        typedAnswer: '',
        scoreHistory: [],
        correctedQuestionArray: [],
        task: {}
    }

    resetState = () => {
        this.setState({
        displayResult: true,
        answer: Number,
        counter: 0,
        startTime: Date.now(),
        endTime: Date.now(),
        progress: 0,
        submit: true,
        answerArray: [],
        typedAnswer: '',
        scoreHistory: [],
        correctedQuestionArray: [],
        task: {}
        })
    }

    getTask =(taskId) =>{
        const { task } = this.props
        let taskyyy = task.find(t => t._id === taskId)
        return taskyyy
    }


    handleChange = (e) =>{

        this.setState({
            typedAnswer: e.target.value,
            submit: false
        })
    }

    handleSubmit = (e) =>{
      
        const tasky = this.getTask(this.props.match.params.taskId)

        this.setState({
            answerArray: this.state.answerArray.concat([this.state.typedAnswer]),
            counter: this.state.counter + 1,
            progress: (this.state.counter + 1) *100/tasky.questions.length,
            answer: Number,
            submit: true,
            endTime: Date.now()
        })
        e.target.reset()
        e.preventDefault()
    }
    
    handleFinish = (e) =>{

        const {dispatch } = this.props
        const tasky = this.getTask(this.props.match.params.taskId)
        let correctedQuestionArray = []
        for (let i=0; i<this.state.answerArray.length; i++){
            if (tasky.questions[i].answer === Number(this.state.answerArray[i])) {
                correctedQuestionArray.push(i)
                }
             }
        const timeDuration = this.getTimeDuration()
      
        dispatch(handleAddScoreHistory(tasky._id, timeDuration, correctedQuestionArray ))

        this.setState({
            displayResult: false,
            correctedQuestionArray: correctedQuestionArray,
            task: tasky
        })

        e.preventDefault()
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
        const tasky = this.getTask(this.props.match.params.taskId)
        const {authedUser}= this.props
        
        return (
            <div>
                {authedUser?
                <div>
                    {( this.state.displayResult)? <Line percent={this.state.progress} strokeWidth="4" strokeColor="#ff45ff" />: null}
                {(this.state.counter < tasky.questions.length)? 
                    (<form onSubmit={this.handleSubmit}>
                        <article className="message is-link">
                            <div className="message-header">
                                <p>Time spent : {this.getTimeDuration()}</p>          
                            </div>
                            <div className="message-body has-text-right title">
                                <h1>{tasky.questions[this.state.counter].number1}</h1>
                                <h1> - {tasky.questions[this.state.counter].number2} </h1>
                                <input className="input title" type="number" placeholder="=" onInput={this.handleChange}/>
                                <br/>
                            </div>
                        </article>
                        <div className="field">
                            <p className="control">
                                <button type='submit' className="button is-success is-fullwidth" disabled={this.state.submit}>Submit</button>
                            </p>
                        </div> 
                    </form>)
                    :( this.state.displayResult)? <p className="button is-success " onClick={this.handleFinish}>Click to see result</p>: null
                }
                {!this.state.displayResult? <DisplayResult task={this.state.task} correctArray={this.state.correctedQuestionArray} resetState = {this.resetState}/>: null }
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

export default connect(mapStateToProps)(QuestionDisplay)

