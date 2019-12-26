import React, { Component } from 'react'
import { Line } from 'rc-progress';
import { connect } from 'react-redux';
import onCreateQuestions from './SpellingService'
import { handleAddScoreHistory } from '../../actions/tasks';
import DisplayResult from './displayResult';

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
        task: {},
        realQuestions: []
    }

    componentDidMount(){
        const tasky = this.getTask(this.props.match.params.taskId)
        this.setState({
            realQuestions: onCreateQuestions(tasky.questions)
        })
    }
    resetState = () => {
        const tasky = this.getTask(this.props.match.params.taskId)
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
        task: {},
        realQuestions: onCreateQuestions(tasky.questions)
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
            if (this.state.realQuestions[i].missingCharacter.toLowerCase() === this.state.answerArray[i].toLowerCase()) {
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

        const {authedUser}= this.props
        const {realQuestions} = this.state

        return (
            <div>
                {authedUser?
                <div>
                {( this.state.displayResult)? <Line percent={this.state.progress} strokeWidth="4" strokeColor="#ff45ff" />: null}

                {(this.state.counter < realQuestions.length)? 
                    (<form onSubmit={this.handleSubmit}>
                        <article className="message is-link">
                            <div className="message-header">
                                <p>Time spent : {this.getTimeDuration()}</p>          
                            </div>
                            <div className="message-body has-text-centered title has-text-success is-size-1">
                                <h1>{realQuestions[this.state.counter].wordWithMissingCharacter.toLowerCase()}</h1>
                                <div className="control has-text-centered" onInput={this.handleChange}>
                                    {realQuestions[this.state.counter].optionToSelected.map(x=>
                                        <label className="radio title" key={x}>
                                            <input type="radio" name='level' value={x}/>
                                            {x.toLowerCase()}
                                        </label>
                                    )}
                                </div>
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