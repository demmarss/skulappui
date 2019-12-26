import React, {Component} from 'react'
import {apiUrlForImages} from '../../service/api'
import ReactAudioPlayer from 'react-audio-player';


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
                    Screen 2
      
            </div>
        )
    }
   
}