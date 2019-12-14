import React, {Component} from "react"
import SearchBar from '../searchBar'
import { handleCreateLMSUser, handleGetLMSUsers } from "../../actions/users";
import { connect } from 'react-redux'
import RegistrationDoneMessage from "./registrationDoneMessage";

class StudentRegistration extends Component {

    componentDidMount(){
        const {dispatch}= this.props
        dispatch(handleGetLMSUsers())
    }

    state ={
        firstname: "",
        lastname: "",
        parent: null,
        grade: "",
        displayStudentInput: false,
        Uploaded: "file",
        picFile: null,
        status: "",
        parentSearched: false,
    }

     handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

      handleSubmit = e => {     
        e.preventDefault();
        const { firstname, lastname, grade, picFile, parent } = this.state;

            let formData = new FormData();
            formData.append('pic', picFile);
            formData.append('firstname', firstname);
            formData.append('lastname', lastname);
            formData.append('grade', grade);
            formData.append('parentCode', parent.code);
            formData.append('role', "student");

            const { dispatch } = this.props

            dispatch(handleCreateLMSUser(formData))

        this.setState({
            firstname: "",
            lastname: "",
            grade: "",
            parentCode: "",
            status: "done",
            pic: null,
        })
      };

      handleChangeFile = prop => e =>{
        this.setState({ 
            [prop]: e.target.files[0],
            Uploaded: "file is-info"
        });
      }

      isEmpty() {
        return (this.state.firstname === "" | this.state.lastname === "" | this.state.mobile === "" | this.state.address === "");
      }

      getUser = (code) =>{
        const { user } = this.props
        let userkeyArray = Object.keys(user).filter(key => user[key].code == code)

        if (userkeyArray == []){
            this.setState({
                displayStudentInput: false
            })  
            return null
        }else{
            let userhere = user[userkeyArray[0]] 
            this.setState({
                displayStudentInput: true
            })  
            return userhere    
        }
        
      }

      getParent = (code) =>{
        let user = this.getUser(code)
        if (user.role == "parent"){
            this.setState({
                parentSearched: true,
                parent: user
              })
        }else{
            this.setState({
                parentSearched: true,
                parent: null
              })
        }
      }

      
      handleFinished =() =>{
        // disptach create student
        // refresh input values to empty string
        // set compareparent code to true
    }

      handleaddMoreStudent =() =>{
        // disptach create student
        // refresh input values to empty string
        // set compareparent code to true
    }
    
    render(){

        let {user} = this.props
        
        return(
            <div>
                <div className="columns is-centered">
                    <div className="column is-12">
                    <h1 className="subtitle">Student Regiestration</h1>
                    <SearchBar Search={this.getParent} PlaceHolder = "Enter parent code" Status=""/>
                    </div>                    
                </div>
                
                <br/>
                {this.state.parentSearched?
                <div className="columns is-12">
                    {this.state.parent == null? 
                        <div className="column is-6">
                                <article className="message is-warning">
                                    <div className="message-header">
                                        <p>Search warning</p>
                                    </div>
                                    <div className="message-body">
                                        Parent code is wrong or no parent exist
                                    </div>                                
                                </article>

                        </div>:
                        <div className="columns is-12">
                            <div className="column is-12">
                                <article className="message is-success">
                                    <div className="message-header">
                                        <p className="title">Parent found</p>
                                    </div>
                                    <div className="message-body">
                                    <p className="subtitle"> Parent name : {this.state.parent.firstname + " " + this.state.parent.lastname} </p>
                                    <p className="subtitle"> Parent address : {this.state.parent.address} </p>
                                    <p className="subtitle"> Parent mobile : {this.state.parent.phonenumber} </p>
                                    </div>                                
                                </article>
                            </div>
                            <div className="column is-12">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="field">
                                        <div className="control">
                                            <input className="input" 
                                            type="text" placeholder="Enter Firstname"
                                            value={this.state.firstname}
                                            onChange={this.handleChange("firstname")} autoFocus=""/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input className="input" 
                                            type="text" placeholder="Enter Lastname" 
                                            value={this.state.lastname}
                                            onChange={this.handleChange("lastname")} autoFocus=""/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <div className="select is-primary is-rounded">
                                            <select onChange={this.handleChange("grade")}>
                                                <option>Select class</option>
                                                <option value="Class_1">Class 1</option>
                                                <option value="Class_2">Class 2</option>
                                                <option value="Class_3">Class 3</option>
                                                <option value="Class_4">Class 4</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={this.state.Uploaded} onChange={this.handleChangeFile('picFile')}>
                                        <label className="file-label">
                                            <input className="file-input" type="file" name="questionImage"/>
                                            <span className="file-cta">
                                            <span className="file-label">
                                                Upload Question
                                            </span>
                                            </span>
                                        </label>
                                    </div>
                    
                                    <br/>
            
                                    <div className="columns">
                                        <div className="column is-6">
                                        <button className="button is-block is-success is-fullwidth" disabled={this.isEmpty()} onClick={this.handleFinished}>Finished</button>
                                        </div>
                                        <div className="column is-6">
                                        <button className="button is-block is-info is-fullwidth" disabled={this.isEmpty()} onClick={this.handleaddMoreStudent}>Add more student</button>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>}
                </div>: null} 
                {this.state.status==="done"? <RegistrationDoneMessage />: null}      
            </div>
        )

    }
    
}
function mapStateToProps({ authedUser, user}) {
    return {
      authedUser,
      user
    };
  }
  export default connect(mapStateToProps)(StudentRegistration)