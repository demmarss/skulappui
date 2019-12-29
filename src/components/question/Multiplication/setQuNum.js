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
                x = Math.floor(Math.random() * 10)
                y = Math.floor(Math.random() * 10)
                break
            case 'level_2':
                x = Math.floor(Math.random() * 100)
                y = Math.floor(Math.random() * 100)
                break
            case 'level_3':
                x = Math.floor(Math.random() * 1000)
                y = Math.floor(Math.random() * 1000)
                break
            case 'level_4':
                x = Math.floor(Math.random() * 10000)
                y = Math.floor(Math.random() * 10000)
                break
            case 'multiplying_2':
                x = Math.floor(Math.random() * 12)
                y = 2
                break
            case 'multiplying_3':
                x = Math.floor(Math.random() * 12)
                y = 3
                break
            case 'multiplying_4':
                x = Math.floor(Math.random() * 12)
                y = 4
                break
            case 'multiplying_5':
                x = Math.floor(Math.random() * 12)
                y = 5
                break
            case 'multiplying_6':
                x = Math.floor(Math.random() * 12)
                y = 6
                break
            case 'multiplying_7':
                x = Math.floor(Math.random() * 12)
                y = 7
                break
            case 'multiplying_8':
                x = Math.floor(Math.random() * 12)
                y = 8
                break
            case 'multiplying_9':
                x = Math.floor(Math.random() * 12)
                y = 9
                break
            case 'multiplying_10':
                x = Math.floor(Math.random() * 12)
                y = 10
                break
            case 'multiplying_11':
                x = Math.floor(Math.random() * 12)
                y = 11
                break
            case 'multiplying_12':
                x = Math.floor(Math.random() * 12)
                y = 12
                break
            default:
                x = 0
                y = 0
        }

        let question=  {
                                number1: x,
                                number2: y,
                                answer: x * y,
                                typedAnswer: Number,
                                remark: ''
                                }
        return question
    }

    handleRadio = (e) =>{
        // console.log(e.target.value)
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
                                    <input type="radio" name='level' value="multiplying_2"/>
                                    X 2
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="multiplying_3"/>
                                    X 3
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="multiplying_4"/>
                                    X 4
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="multiplying_5"/>
                                    X 5
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="multiplying_6"/>
                                    X 6
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="multiplying_7"/>
                                    X 7
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="multiplying_8"/>
                                    X 8
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="multiplying_9"/>
                                    X 9
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="multiplying_10"/>
                                    X 10
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="multiplying_11"/>
                                    X 11
                                </label>
                                <label className="radio">
                                    <input type="radio" name='level' value="multiplying_12"/>
                                    X 12
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


