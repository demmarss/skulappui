import React, {Component} from 'react'
import ParentRegistration from './parentRegistration'
import StudentRegistration from './studentRegistration'
import StaffRegistration from './staffRegistration'

export default class Registration extends Component {
        state={
            section: "studentReg"
        }
    render(){
        return(
            <div>
                <br/>
                <div className="has-text-centered">
                    <h1 className="title">Registration</h1>
                </div>
                <br/>
                <div className="columns">
                    <div className="column is-2">
                        
                        <ul>
                            <li>
                                <p className="button is-success is-fullwidth" onClick={()=> this.setState({section: "parentReg"})}>Parent Registration</p>
                            </li>
                            <br/>
                            <li>
                                <p className="button is-warning is-fullwidth" onClick={()=> this.setState({section: "studentReg"})}>Student Registration</p>
                            </li>
                            <br/>
                            <li>
                                <p className="button is-danger is-fullwidth" onClick={()=> this.setState({section: "staffReg"})}>Staff Registration</p>
                            </li>
                        </ul>

                    </div>
                    <div className="column is-10">
                        {this.state.section==="parentReg"? <ParentRegistration/>:null}
                        {this.state.section==="studentReg"? <StudentRegistration/>:null}
                        {this.state.section==="staffReg"? <StaffRegistration/>:null}


                    </div>
                </div>
            </div>
        )
    }
}