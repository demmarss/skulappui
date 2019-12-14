import React, {Component} from 'react'
import SearchBar from '../searchBar';

export default class LandingTabs extends Component {

    SearchUser=(code, status)=>{

        this.props.searchUser(code)

        this.props.setStatus(status)
    }

    handleSearchClass=(classhere, pgtitle)=>{

        this.props.SearchClass(classhere)

        this.props.setStatus("classProfile", pgtitle)
    }

    SearchFamilyPayment=(code, status)=>{

        this.props.GetFamily(code)

        this.props.setStatus(status)
    }


    render(){
        return(
            <div>
                <br/>
                    <h1 className="title">Administrative</h1>    
                <br/>
                <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child notification is-primary">
                    <p className="title">Go to profile</p>
                    <p className="subtitle">Click to see the full profile of registered person</p>
                    <SearchBar Search={this.SearchUser} PlaceHolder ="Enter parent/student/staff code" Status="registerProfile"/>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-success">
                    <p className="title">ID card</p>
                    <p className="subtitle">View and print the ID card of a registered person</p>
                    <SearchBar Search={this.SearchUser} PlaceHolder = "Enter parent/student/staff code" Status="idCard"/>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                    <p className="title">Payment</p>
                    <p className="subtitle">Quick access to payment of fees and see payment history</p>
                    <SearchBar Search={this.SearchFamilyPayment} PlaceHolder = "Enter parent/student/staff code" Status="payment"/>
                    </article>
                </div>
                </div>
                <div className="tile is-ancestor">
                <div className="tile is-parent" onClick={()=>this.handleSearchClass("Class_1", "Class One")}>
                    <article className="tile is-child notification is-success">
                    <p className="title">Class One</p>
                    <p className="subtitle">Quick access to class for list, attendance, payment history etc</p>
                    </article>
                </div>
                <div className="tile is-parent" onClick={()=>this.handleSearchClass("Class_2", "Class Two")}>
                    <article className="tile is-child notification is-link">
                    <p className="title"> Class Two</p>
                    <p className="subtitle">Quick access to class for list, attendance, payment history etc</p>
                    </article>
                </div>
                <div className="tile is-parent" onClick={()=>this.handleSearchClass("Class_3", "Class Three")}>
                    <article className="tile is-child notification is-danger">
                    <p className="title">Class Three</p>
                    <p className="subtitle">Quick access to class for list, attendance, payment history etc</p>
                    </article>
                </div>
                <div className="tile is-parent" onClick={()=>this.handleSearchClass("Class_4", "Class Four")}>
                    <article className="tile is-child notification is-info">
                    <p className="title">Class Four</p>
                    <p className="subtitle">Quick access to class for list, attendance, payment history etc</p>
                    </article>
                </div>
                </div>
            </div>
        )
    }
}