import React, {Component} from 'react'
import SetQuestionNumber from './setQuNum'
import TaskCreated from '../../task/taskCreatedMessage'
import { connect } from 'react-redux'

class Reading extends Component {
    state = {
        status: "",
        questions: [],
        answeredQuestions:[]
      }

    setStatus = (passedstatus) => {
        
        this.setState({
            status: passedstatus,
        })
    }

      render() {
        // const {questions, answeredQuestions} = this.state;
        return (
          <div className="App">
                        
            {(this.state.status === '')? <SetQuestionNumber Status={this.setStatus}/> : null}

            {(this.state.status === 'submit')? <TaskCreated/> : null}
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
export default connect(mapStateToProps)(Reading)