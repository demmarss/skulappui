import React, {Component} from "react"
import { handleCreateLMSUser } from "../../actions/users";
import { connect } from 'react-redux'
import RegistrationDoneMessage from "./registrationDoneMessage";

class StaffRegistration extends Component {
    state ={
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        address: "",
        Uploaded: "file",
        picFile: null,
        regStatus: ""
    }

     handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

      handleSubmit = e => {     
        e.preventDefault();
        const { firstname, lastname, email, mobile, address, picFile } = this.state;

            let formData = new FormData();
            formData.append('pic', picFile);
            formData.append('firstname', firstname);
            formData.append('lastname', lastname);
            formData.append('mobile', mobile);
            formData.append('address', address);
            formData.append('role', "staff");
            formData.append('email', email);

            const { dispatch } = this.props

            dispatch(handleCreateLMSUser(formData))

        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            mobile: "",
            address: "",
            status: "done",
            picFile: null,
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

    render(){

        return(
            <div className="container">
                <h1 className="subtitle">Staff Regiestration</h1>
                {this.state.regStatus==""? <form onSubmit={this.handleSubmit}>
                            <div className="field">
                                <div className="control">
                                    <input className="input" 
                                    type="text" placeholder="Your Firstname"
                                    value={this.state.firstname}
                                    onChange={this.handleChange("firstname")} autoFocus=""/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input" 
                                    type="text" placeholder="Your Lastname" 
                                    value={this.state.lastname}
                                    onChange={this.handleChange("lastname")} autoFocus=""/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input" 
                                    type="email" placeholder="Your email"
                                    value={this.state.email}
                                    onChange={this.handleChange("email")} autoFocus=""/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Address</label>
                                <div className="control">
                                    <textarea className="textarea" placeholder="Textarea"
                                    onChange={this.handleChange("address")} autoFocus=""/>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input className="input" 
                                    type="number" placeholder="Your mobile number"
                                    value={this.state.mobile}
                                    onChange={this.handleChange("mobile")} autoFocus=""/>
                                </div>
                            </div>

                            <div className={this.state.Uploaded} onChange={this.handleChangeFile('picFile')}>
                                <label className="file-label">
                                    <input className="file-input" type="file" name="pic"/>                            
                                    <span className="file-cta">
                                    <span className="file-label">
                                        Upload Photo
                                    </span>
                                    </span>                               
                                </label>
                            </div>

                            <button className="button is-block is-success is-fullwidth" disabled={this.isEmpty()}>Register</button>
                        </form>:null}
                        {this.state.status==="done"? <RegistrationDoneMessage/>: null}
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
  export default connect(mapStateToProps)(StaffRegistration)