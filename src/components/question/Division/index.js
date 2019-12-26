import React, {Component} from 'react'
import SetQuestionNumber from './setQuNum'
import TaskCreated from '../../task/taskCreatedMessage'
import {handleCreateTask} from '../../actions/tasks'
import { connect } from 'react-redux'

class Division extends Component {
    state = {
        status: "",
        questions: [],
        answeredQuestions:[],
        lgroupId: ""
      }

      setStatus = (passedstatus, questions = this.state.questions, answeredQuestions = this.state.answeredQuestions, lgroupId="") => {
        this.setState({
            status: passedstatus,
            questions: questions,
            answeredQuestions: answeredQuestions,
            lgroupId: lgroupId
        })
        
        const { dispatch, authedUser } = this.props;
        let task = {
                    topic: 'Division',
                    user: authedUser._id,
                    questions: questions,
                    scoreHistory: []
                    }

        dispatch(handleCreateTask(task, lgroupId))
    }

    setQuestions = (q) => {

        this.setState({
            questions: this.state.questions.concat(q)
        })
    }

    generateResult = () =>{

        let correct = this.state.answeredQuestions.filter(x => x.remark === 'correct').length

        let result = correct* 100/this.state.answeredQuestions.length

        return result + '%'
    }

      render() {
        // const {questions, answeredQuestions} = this.state;
        return (
          <div className="columns is-mobile is-centered">
          <div className="column is-half">
            <h1 className='title'>Division</h1>
            <br/>
            {(this.state.status === '')? <SetQuestionNumber qNumber = {this.state.questionNumber} Status={this.setStatus}/> : null}
            {(this.state.status === 'submit')? <TaskCreated qNumber = {this.state.questionNumber} Status={this.setStatus}/> : null}
            {/* {(this.state.status === 'start')? <QuestionDisplay Questions={this.state.questions} Status={this.setStatus}/>: null}
            {(this.state.status === 'finish')? <ResultDisplay questions={questions} Result={this.generateResult()} Status={this.setStatus}/>: null}
            {(this.state.status ==='review')? <ReviewDisplay questions={questions} answered={answeredQuestions} Status={this.setStatus}/>: null} */}
          </div>
          </div>
        );
      }

}
function mapStateToProps({ authedUser, learningCycle}) {
    return {
      authedUser,
      learningCycle
    };
  }
export default connect(mapStateToProps)(Division)