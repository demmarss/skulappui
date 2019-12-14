import React, {Component} from 'react'
import LandingTabs from './landingTab'
import IdCard from './idCard';
import ClassProfile from './classProfile';
import RegisterProfile from './profile';
import Payment from './payment'
import { handleGetLMSUsers, handlePaymentToLmsUser } from '../../actions/users';
import { connect } from 'react-redux'


class Administration extends Component {
    state={
        status: "",
        user: null, 
        students: [],
        family: [],
        pgTitile: ""
    }

    componentDidMount(){
        const {dispatch}= this.props
        dispatch(handleGetLMSUsers())
    }
    
    setStatus = (status, pgTitile="" )=> {

        this.setState({
            status,
            pgTitile
        })

    }

    searchUser = code =>{
        const { user } = this.props
        let userkeyArray = Object.keys(user).filter(key => user[key].code == code)
        if (userkeyArray == []){
            this.setState({
                user: null
            })  
            return null
        }else{
            let userhere = user[userkeyArray[0]] 
            this.setState({
                user: userhere
            })
            return userhere     
        }
    }

    getUserOnly = code => {
        const { user } = this.props
        let userkeyArray = Object.keys(user).filter(key => user[key].code == code)
        let userhere = user[userkeyArray[0]] 
        return userhere 
    }

    searchClass = grade =>{
        let studentsHere = []
        const { user } = this.props
        let userkeyArray = Object.keys(user).filter(key => user[key].grade == grade)
        userkeyArray.map(key => studentsHere.push(user[key]))
        this.setState({
            students: studentsHere
        })
    }

    getFamily = code =>{
        let family=[]
        // find user of the code
        let userhere = this.searchUser(code)
        // check the role
        if(userhere.role == "student"){
            // if student, getParent, and then kids,
            let parent = this.searchUser(userhere.parentCode)
            family.push(parent)
            let kids = this.getKids(parent.code)
            family = [...family, ...kids]
        }else if(userhere.role == "parent"){
            // if parent, getKids
            let kids = this.getKids(code)

            family.push(userhere)
            family = [...family, ...kids]
        }else{
            family = null
        }
        this.setState({
            family: family
        })
    }

    getKids = pCode => {
        const { user} = this.props
        // get only students
        let studentsHere = []
        let userkeyArray = Object.keys(user).filter(key=> user[key].role == "student")
        userkeyArray.map(key => studentsHere.push(user[key]))
        let kids = studentsHere.filter(student=> student.parentCode == pCode)
        return kids
    }

    handlePayment = (parentId, payment ) => {
        const { dispatch } = this.props

        dispatch(handlePaymentToLmsUser(parentId, payment))

    }

    render(){
        return(
            <div>
                <br/>
                {this.state.status === ""? <LandingTabs setStatus={this.setStatus} searchUser={this.searchUser} GetFamily={this.getFamily} SearchClass={this.searchClass}/>: null}
                {this.state.status === "idCard"? <IdCard setStatus={this.setStatus} searchUser={this.searchUser} user={this.state.user}/>: null}
                {this.state.status === "classProfile"? <ClassProfile setStatus={this.setStatus} SearchClass={this.searchClass} students={this.state.students} GetUserOnly = {this.getUserOnly} searchUser={this.searchUser} Title ={this.state.pgTitile}/>: null}
                {this.state.status === "registerProfile"? <RegisterProfile setStatus={this.setStatus} searchUser={this.searchUser} user={this.state.user}/>: null}
                {this.state.status === "payment"? <Payment HandlePayment = {this.handlePayment} setStatus={this.setStatus} searchUser={this.searchUser} getFamily={this.getFamily} user={this.state.user} Family={this.state.family}/>: null}
            </div>
        )
    }
}

function mapStateToProps({ dispatch, authedUser, user}) {
    return {
      authedUser,
      user,
      dispatch
    };

  }
  export default connect(mapStateToProps)(Administration)