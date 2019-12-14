import React, {Component} from 'react'
import AdminTab from './adminTab'
import Registration from './Registration'
import Academics from './Academics';
import Finance from './Finance';
import Administration from './Admin'

class Admin extends Component{
    state={
        status: "home"
    }

    setStatus = (tabStatus) =>{
        this.setState({
            status: tabStatus
        })
    }

    render(){
        return(
            <div>
                <AdminTab Status={this.setStatus}/>
                {(this.state.status=== "home")? <Administration/>: null}
                {(this.state.status=== "registration")? <Registration/>: null}
                {(this.state.status=== "finance")? <Finance/>: null}
                {(this.state.status=== "academics")? <Academics/>: null}
            </div>
        )
    }
}

export default(Admin)