import React, {Component} from 'react'
import SearchBar from '../searchBar';
import SuccessMessage from '../successMessage';
import FailureMessage from '../failureMessage';
import BackButton from '../backButton';

export default class Payment extends Component {

    componentDidMount(){
        const {Family} = this.props
        const Parent = Family.filter(member=> member.role == "parent")[0]
        this.gettingPaymentStatus(Parent)
    }

    state ={
        month: "",
        year: "2019",
        paymentStatus: "tile is-child notification is-link",
        paymentDone: false
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };
      
    getFee=(user)=>{
        switch(user.grade) {
            case "Class_1":
              return 50
              break;
            case "Class_2":
                return 50
                break;
            case "Class_3":
              return 60
              break;
            case "Class_4":
                return 60
                break;
            default:
              return 50
          }
    }
    
    getTotal=(kids)=>{
        let totalFee = 0

        kids.map(kid=> totalFee = totalFee + this.getFee(kid))

        return totalFee
    }
    
    handlePayFull= () => {
        const {Family, HandlePayment } = this.props
        const Parent = Family.filter(member=> member.role == "parent")[0]
        const Kids = Family.filter(member=> member.role == "student")
        let amount = this.getTotal(Kids)
        const paidMonthYear = (this.state.month + "," + this.state.year)

        let payment = {
            amount: amount,
            monthFor: paidMonthYear,
            paymentDate: Date.now(),
        }

        // send for payment
        HandlePayment(Parent._id, payment)

        this.setState({
            month: "",
            year: 2019,
            paymentDone: true
        })
    }

    // handlePartPayment= (amount) => {
    //     // send for payment (amount)

    //     console.log(amount)
    // }

    gettingPaymentStatus = (parent) => {
        //get payment history, most specially the last payment month
        let lastPaymentFor = new Date(parent.paymentHistory[parent.paymentHistory.length - 1].monthFor)
        // get the month now
        let todayDate = new Date()
        // compare the months
        let monthDifference = todayDate.getMonth() - lastPaymentFor.getMonth()
        console.log(monthDifference)
        if(monthDifference > 0){
            this.setState({
                paymentStatus: "tile is-child notification is-danger"
            })
        }
    }

    render() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"]

        const {setStatus, user, getFamily, Family} = this.props

        const Parent = Family.filter(member=> member.role == "parent")[0]

        const Kids = Family.filter(member=> member.role == "student")
                
        return(
            <div>            
                <br/>
                    <h1 className="title">Payment</h1>    
                <br/>
                <div className="columns">
                    <div className="column is-4">
                        <BackButton setStatus = {setStatus} />
                        <br/>
                        <br/>
                        <SearchBar Search={getFamily} PlaceHolder = "Enter parent/student/staff code" Status="registerProfile"/>
                        <br/>
                        <br/>
                        {Family!==null? <SuccessMessage/>: null}
                        {Family==null? <FailureMessage/>: null}
                                    
                    </div>
                    
                    <div className="column is-7">
                    {!this.state.paymentDone?
                        <div>
                            {user!==null?
                                <div>
                                <br/>
            
                                <div className="tile is-ancestor">
                                    <div className="tile is-12 is-parent">
                                        <article className="tile is-child notification is-primary">
                                            <p className="title">{Parent.firstname + " " + Parent.lastname}</p>
                                            <p className="subtitle">{Parent.code}</p>
                                        </article>
                                    </div>
                                </div>
                                <div className="tile is-ancestor">
                                    <div className="tile is-8 is-parent">
                                    <article className="tile is-child notification is-info">
                                        {Kids.map(kid=>
                                            <p className="subtitle is-4" key={kid._id}>{kid.firstname + " " + kid.lastname} - ${this.getFee(kid)}</p>
                                        )}
                                        <p className="subtitle is-3 ">Total: ${this.getTotal(Kids)}</p>
                                        </article>
                                    </div>
                                    <div className="tile is-4 is-parent">
                                    <article className={this.state.paymentStatus}>
                                            <p className="title">Status</p>
                                            <p className="subtitle">Payment message</p>
                                        </article>
                                    </div>
                                </div>
            
                                <div className="tile is-ancestor">
                                    <div className="tile is-parent">
                                        <div className="field">
                                            <div className="control">
                                                <div className="select is-primary">
                                                <select onChange={this.handleChange("month")} defaultValue={this.state.month}>
                                                    <option>Choose Month</option>
                                                    {months.map(month=> <option key={months.indexOf(month)}>{month}</option>)}                                            
                                                </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <div className="select is-info">
                                                <select onChange={this.handleChange("year")} defaultValue={this.state.year}>
                                                    <option>Choose Year</option>
                                                    {years.map(year=> <option key={years.indexOf(year)}>{year}</option>)}                                            
                                                </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                    {/* <div className="tile is-parent">
                                        <input className="input"
                                        defaultValue={this.state.amount}
                                        type="number"
                                        placeholder="Enter the partial amount paid"
                                        onChange = {this.handleChange}
                                        />
            
                                    <p className="button is-warning" onClick={()=> this.handlePartPayment(this.state.amount)}>Partial Payment</p>
                                    </div> */}
                                    
                                    <div className="tile is-parent">
                                        <p className="button is-success" onClick={this.handlePayFull} disabled={this.state.month == ""}>Full Payment</p>
                                    </div>
                                </div>
                                </div>:null}
                                </div>
                                :
                                <p>Payment successful</p>
                    
                        }
                        
                    </div>            
                </div>
            </div>
        )
    }
    
}