import React, { Component } from 'react'

export default class Main extends Component {
    state = {
        questionNumber: '',
        topic:'',
        description: "",
        subject: "",
        questionType: "",
        notification: false,
        
    }

    isEmpty() {
        return (this.state.topic === "" || this.state.subject=== "" || this.state.questionType === "")
      }
    
      handleRadio = (e) =>{
        console.log(e.target.value)
    }
    
    handleSubmit = (e)=>{

        //To show notificaiton if lgroup is not changed
        if (this.state.topic === "" || this.state.subject=== "" || this.state.questionType === ""){
            return this.setState({
                notification: true
            })
        }

        let mainInfo = {
            questionType: this.state.questionType,
            subject: this.state.subject,
            description: this.state.description,
            topic: this.state.topic
        }

        this.props.setMainInfo(mainInfo)

        e.preventDefault()
    }

    handleChange = prop => event => {
        
        this.setState({ [prop]: event.target.value });

      };

    render (){
       
        return (

            <div>
                <h1 className="title">Reading</h1>
                <form >            
                    <div>
                    <div className="notification is-danger" hidden={!this.state.notification}>
                    Please ensure to fill <strong>all fields</strong>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-body">
                            <div className="field">
                            <p className="control is-expanded" onChange={this.handleChange('questionType')} value={this.state.topic}>
                                <input className="input" type="text" placeholder="Task Type"/>
                            </p>
                            </div>
                            <div className="field">
                            <p className="control is-expanded" onChange={this.handleChange('subject')} value={this.state.subject}>
                                <input className="input is-success" type="text" placeholder="Subject"/>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control" onChange={this.handleChange('description')} value={this.state.description}>
                            <textarea className="textarea" placeholder="Give brief description"></textarea>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label">Choose type of question</label>
                        </div>
                        <div className="field-body">
                            
                            <div className="field">
                                <div className="control has-text-centered" onChange={this.handleChange('topic')} value={this.state.questionType}>
                                    <label className="radio">
                                        <input type="radio" name='questionType' value="ReadingTextOut"/>
                                        Reading Text Out
                                    </label>
                                    <label className="radio">
                                        <input type="radio" name='questionType' value="ReadingMachingText"/>
                                        Reading-Matching Text 
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                <p className="button is-success" type='submit' onClick={this.handleSubmit} disabled={this.isEmpty()}>Start Adding Questions</p> </div>
            </form>
            </div>
        )
    }
    
}
