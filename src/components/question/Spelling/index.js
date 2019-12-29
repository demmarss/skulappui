import React, {Component} from 'react'
import SetQuestion from './createTask'
import TaskCreated from '../../task/taskCreatedMessage'
import QuestionDisplay from './displayQu'
import ResultDisplay from './displayResult'
import ReviewDisplay from './displayReview'
import {handleCreateTask} from '../../actions/tasks'
import { connect } from 'react-redux'


class Spelling extends Component {
    state = {
        status: "",
        questions: [],
        answeredQuestions:[]
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
                    topic: 'Spelling',
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
        const {realQuestions, questions, answeredQuestions} = this.state;
        return (
          <div className="columns is-mobile is-centered">
          <div className="column is-half">
            <h1 className='title'>Spelling</h1>
            <br/>
            {(this.state.status === '')? <SetQuestion Status={this.setStatus}/> : null}
            {(this.state.status === 'submit')? <TaskCreated qNumber = {this.state.questionNumber} Status={this.setStatus}/> : null}

            {(this.state.status === 'start')? <QuestionDisplay RealQuestions={realQuestions} Questions={questions} Status={this.setStatus}/>: null}
            {(this.state.status === 'finish')? <ResultDisplay RealQuestions={realQuestions} questions={questions} Result={this.generateResult()} Status={this.setStatus}/>: null}
            {(this.state.status ==='review')? <ReviewDisplay  RealQuestions={realQuestions} questions={questions} answered={answeredQuestions} Status={this.setStatus}/>: null}
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
  
  export default connect(mapStateToProps)(Spelling)