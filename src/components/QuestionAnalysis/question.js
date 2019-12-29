import React, {Component} from 'react'
import { connect } from 'react-redux'
import ProgressChart from './questionsChart'

class Progress extends Component {

    attempts = (userId, task) =>{
        let attempt = task.scoreHistory.filter(x => (x.userId === userId))
        return attempt
    }

    // getxlabel = (scoreArray) => {
    //     let xlabel = []
    //     for (let i=0; i<scoreArray.length; i++){
    //         xlabel.push(i+1)
    //     }
    //     return xlabel
    // } 

    
    render(){
        const {taskSingle, authedUser } = this.props

        const scoreArray = (userId, task) => this.attempts(userId, task).map(x => x.correctedArray.length*100/task.questions.length)

        // const xlableArray = (userId, task) => this.getxlabel(scoreArray(userId, task))

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        const correctedArray = this.attempts(authedUser._id, taskSingle).map(x => x.correctedArray)

        // console.log("Corrected Array:", correctedArray)

        // console.log("total attempts: ", correctedArray.length)

        // console.log('here is the task', taskSingle)

        // console.log("total number of questions needed for xlabel", taskSingle.questions.length)


        // this give all the question index that were answered correctly
        const allQuestionAnweredCorretly = correctedArray.flatMap(x=> [...x])
        
        // building the number of times that each question is answered correctly

        let Ylabel = []

        for (let i = 0; i< taskSingle.questions.length; i++){
            const count = allQuestionAnweredCorretly.filter(item => item === i).length;

            Ylabel.push(count)
        }
        
        let Xlabel = []

        for (let i = 0; i< taskSingle.questions.length; i++){
            Xlabel.push(i)
        }
        
        const totalAttempt = correctedArray.length


        //////////////////////////////////////////////////////////////////////////////////////////////////////


        return (           
                <div key={taskSingle._id}>  

                        {scoreArray(authedUser._id, taskSingle).length > 0?
                        
                        <ProgressChart 
                            labelTopic= {taskSingle.topic}
                            scoreArray = {Ylabel.map(x=> x*100/totalAttempt)} 
                            xlableArray = {Xlabel}
                            yAxisMax = {100}
                            />: null
                        }      
                </div>
        )
    }
}
function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(Progress)




                     