import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleReceiveLgroups } from '../../actions/learningCycle';

class SetQuestionNumber extends Component {

    state = {
        questionNumber: '',
        level:'level_1',
        lgroupId: "",
        advanceSetiing: false,
        notification: false
    }

        // Provide the lgroups that the user already have
        componentDidMount(){
            const { authedUser, dispatch } = this.props
            if (authedUser){
                dispatch(handleReceiveLgroups(authedUser._id))
            }
        }


    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

    handleSubmit = (e)=>{
        //To show notificaiton if lgroup is not changed
        if (this.state.lgroupId === ""){
            return this.setState({
                notification: true
            })
        }
        
        let questions = this.generateQuestions(Number(this.state.questionNumber))
        console.log(this.state.level)
        this.props.Status('submit', questions,[], this.state.lgroupId)

        this.setState({
            questionNumber: 0
        })

        e.preventDefault()
    }

    generateQuestions = (n) => {
        let questions =[]
        for (var i = 0; i < n; i++){
            questions.push(this.questionModel())   
        }
        return questions
    }

    questionModel() {
        let x = 0
        let y = 0

        switch (this.state.level){
            case 'level_1':
                y = Math.floor(Math.random() * 10)+1
                x = Math.floor(Math.random() * 5) * y
                break
            case 'level_2':
                y = Math.floor(Math.random() * 10)+1    
                x = Math.floor(Math.random() * 10) * y
                break
            case 'level_3':
                y = Math.floor(Math.random() * 10)+6    
                x = Math.floor(Math.random() * 100) * y
                break
            case 'level_4':
                y = Math.floor(Math.random() * 10)+10    
                x = Math.floor(Math.random() * 100) * y
                break
            case 'dividing_2':
                x = Math.floor(Math.random() * 12) * 2
                y = 2
                break
            case 'dividing_3':
                x = Math.floor(Math.random() * 12) * 3
                y = 3
                break
            case 'dividing_4':
                x = Math.floor(Math.random() * 12) * 4
                y = 4
                break
            case 'dividing_5':
                x = Math.floor(Math.random() * 12) * 5
                y = 5
                break
            case 'dividing_6':
                x = Math.floor(Math.random() * 12) * 6
                y = 6
                break
            case 'dividing_7':
                x = Math.floor(Math.random() * 12) *7
                y = 7
                break
            case 'dividing_8':
                x = Math.floor(Math.random() * 12) * 8
                y = 8
                break
            case 'dividing_9':
                x = Math.floor(Math.random() * 12) * 9
                y = 9
                break
            case 'dividing_10':
                x = Math.floor(Math.random() * 12) * 10
                y = 10
                break
            case 'dividing_11':
                x = Math.floor(Math.random() * 12) * 11
                y = 11
                break
            case 'dividing_12':
                x = Math.floor(Math.random() * 12) * 12
                y = 12
                break
            default:
                x = 0
                y = 0
        }

        let question=  {
                                number1: x,
                                number2: y,
                                answer: x / y,
                                typedAnswer: Number,
                                remark: ''
                                }
        return question
    }

    handleRadio = (e) =>{
        console.log(e.target.value)
    }

    isAdvanceSetiing=()=>{
        this.setState({
            advanceSetiing: !this.state.advanceSetiing
        })
    }

    isEmpty() {
        return (this.state.questionNumber === "");
      }

    render(){
        const { authedUser, learningCycle } = this.props

        return (
            <div>
                {authedUser?
                <form >
                    <div className='box has-background-warning'>
                        <p className=''>Choose the level of difficulty</p>
                    <br/>
                        <div className="control has-text-centered" onChange={this.handleChange('level')} value={this.state.level}>
                            <label className="radio">
                                <input type="radio" name='level' value="level_1" defaultChecked/>
                                Level 1
                            </label>
                            <label className="radio">
                                <input type="radio" name='level' value="level_2"/>
                                Level 2
                            </label>
                            <label className="radio">
                                <input type="radio" name='level' value="level_3"/>
                                Level 3
                            </label>
                            <label className="radio">
                                <input type="radio" name='level' value="level_4"/>
                                Level 4
                            </label>
                        </div>
                        <br/>
                        <p className='button is-small is-rounded is-danger is-inverted' onClick={this.isAdvanceSetiing}> Advance settings</p>
                        <br/><br/>
                        {(this.state.advanceSetiing)?
                            (<div className="control has-text-centered" onChange={this.handleChange('level')} value={this.state.level}>
                                <label className="radio">
                                    <input type="radio" name='level' value="dividing_2"/>
                                    / 2
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="dividing_3"/>
                                    / 3
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="dividing_4"/>
                                    / 4
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="dividing_5"/>
                                    / 5
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="dividing_6"/>
                                    / 6
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="dividing_7"/>
                                    / 7
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="dividing_8"/>
                                    / 8
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="dividing_9"/>
                                    / 9
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="dividing_10"/>
                                    / 10
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="dividing_11"/>
                                    / 11
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="mdividing_12"/>
                                    / 12
                                </label>
                            </div>): null
                        }
                    </div>
                    <input className="input"
                        type="number" 
                        placeholder='Enter number of question'
                        onChange={this.handleChange('questionNumber')}
                    />
                    <br/>
                    <br/>
                    <div className="notification is-danger" hidden={!this.state.notification}>
                        <button className="delete"></button>
                    Please select  <strong>learning group</strong>
                    </div>
                <div className="control">
                    <div className="select">
                        <select onChange={this.handleChange('lgroupId')}>
                        <option>Select learning group</option>
                        {learningCycle.map(x=>
                          <option value={x._id} key={x._id}>{x.lgtitle}</option>
                        )}
                        </select>
                    </div>
                </div>
                <br/>
                <p className="button is-success" type='submit' onClick={this.handleSubmit} disabled={this.isEmpty()}>Create</p>  
            </form>
            :
             <p>Please log in to set question </p>   }
            </div>
        )
    }

}
function mapStateToProps({ authedUser, learningCycle}) {
    return {
      authedUser,
      learningCycle
    };
  }

export default connect(mapStateToProps)(SetQuestionNumber)
