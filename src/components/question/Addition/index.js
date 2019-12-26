import React, {Component} from 'react'
import SetQuestionNumber from './setQuNum'
import TaskCreated from '../../task/taskCreatedMessage'
import { connect } from 'react-redux'
import {handleCreateTask} from '../../actions/tasks'

class Addition extends Component {
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
                    topic: 'Addition',
                    user: authedUser._id,
                    questions: questions,
                    scoreHistory: []
                    }

        dispatch(handleCreateTask(task, lgroupId))
    }

    generateResult = () =>{

        let correct = this.state.answeredQuestions.filter(x => x.remark === 'correct').length

        let result = correct* 100/this.state.answeredQuestions.length

        return result + '%'
    }

      render() {
        return (
          <div className="columns is-mobile is-centered">
          <div className="column is-half">
            
            {(this.state.status === '')? <SetQuestionNumber qNumber = {this.state.questionNumber} Status={this.setStatus}/> : null}
            {(this.state.status === 'submit')? <TaskCreated qNumber = {this.state.questionNumber} Status={this.setStatus}/> : null}
            
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
export default connect(mapStateToProps)(Addition)