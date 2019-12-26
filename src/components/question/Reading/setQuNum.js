import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleReceiveLgroups } from '../../actions/learningCycle';
import Main from './main'
import ReadingMatchingText from './readingMatchingText'
import ReadingTextOut from './readingTextOut'
import { handleCreateTaskMainInfo, handleCreateTaskWithImages, handleAddOptionToTask, handleCreateTaskWithImage1 } from '../../actions/tasks';



class SetQuestionNumber extends Component {

    state = {
        questionNumber: '',
        mainInfo: {},
        status: "main",
        taskId: ""
    }

    // Provide the lgroups that the user already have
    componentDidMount(){
        const { authedUser, dispatch } = this.props
        if (authedUser){
            dispatch(handleReceiveLgroups(authedUser._id))
        }
    }

    setMainInfo = (mainInfo) => {
        
        this.setState({
            mainInfo: mainInfo,
            status: mainInfo.topic
        })

        const { dispatch } = this.props

        dispatch(handleCreateTaskMainInfo(mainInfo))
    
    }
    
    handleAddFile1 = (formData)=>{

        const { dispatch, task } = this.props

        formData.append('taskId', task[task.length - 1]._id)

        dispatch(handleCreateTaskWithImage1(formData))

        this.setState({
            taskId: task[task.length - 1]._id
        })

    }

    handleSetQuestion = ()=>{

        const { dispatch } = this.props

        dispatch(handleAddOptionToTask(this.state.taskId))

        this.props.Status('submit')
                
        this.setState({
            status: "main"
        })

    }

    render(){
        const { authedUser, task} = this.props

        return (
            <div>
                
                {authedUser?
                <div>
                    { this.state.status === "main"?  <Main setMainInfo = {this.setMainInfo}/> : null } 

                    { this.state.status === "ReadingTextOut"?  
                        <ReadingTextOut mainInfo = {this.state.mainInfo}
                                        task = {task} 
                                        handleAddFile1 = {this.handleAddFile1} 
                                        handleSetQuestion = {this.handleSetQuestion}/> : null }
                    { this.state.status === "ReadingMachingText"?  
                        <ReadingMatchingText    mainInfo = {this.state.mainInfo}
                                                task = {task} 
                                                handleAddFile1 = {this.handleAddFile1}
                                                handleSetQuestion = {this.handleSetQuestion}/> : null }
                
                
                </div>:
             <p>Please log in to set question </p> }
                
            </div>
        )
    }

}

function mapStateToProps({ authedUser, learningCycle, task, dispatch}) {
    return {
      authedUser,
      learningCycle,
      task,
      dispatch
    };
  }

export default connect(mapStateToProps)(SetQuestionNumber)

