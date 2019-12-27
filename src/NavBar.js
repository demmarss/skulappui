import React, {Fragment, Component} from 'react'
import {Link} from 'react-router-dom'
import {logoutUser} from './components/actions/authUser'
import {handleReceiveLgroups} from './components/actions/learningCycle'
import {handleReceiveTasks} from './components/actions/tasks'
import {connect} from 'react-redux'

class NavBar extends Component {

    handleClick = () => {
        var burger = document.querySelector('.burger')
        var nav = document.querySelector('#' + burger.dataset.target);

        burger.classList.toggle('is-active')
        nav.classList.toggle('is-active');

    }

    render() {

        const {authedUser, dispatch} = this.props

        return (

            <nav className="navbar is-black is-large">
                <div className="navbar-brand">
                    <span className="navbar-burger burger" data-target="navbarMenuHeroB"
                        onClick={
                            this.handleClick
                    }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div className="navbar-menu" id="navbarMenuHeroB">
                    <div className="navbar-start">
                        <Link className="navbar-item" to='/'>
                            Home
                        </Link>
                        {
                        authedUser ? <React.Fragment>
                            
                            {authedUser.role === 'Admin'? 
                            
                            <React.Fragment>
                            <Link className="navbar-item" to='/admin'>
                                Admin
                            </Link>
                            <Link className="navbar-item" to='/timer'>
                                Timer
                            </Link>
                            <Link className="navbar-item" to='/lcycle'>
                                LearnCycle
                            </Link>
                            <Link className="navbar-item" to='/pickup'>
                                PickUp
                            </Link> </React.Fragment>:null
                            }
                            

                            {/* for student alone */}
                            {
                            authedUser.role === 'Student' ? <React.Fragment>
                                <Link to="/myProgress" className="navbar-item"
                                    onClick={
                                        () => dispatch(handleReceiveTasks(authedUser._id))
                                }>
                                    My Progress
                                </Link>

                                <Link to="/myQuestionAnalysis" className="navbar-item"
                                    onClick={
                                        () => dispatch(handleReceiveTasks(authedUser._id))
                                }>
                                    Q Analysis
                                </Link>
                            </React.Fragment> : 
                            <Link className="navbar-item" to='/question'>
                                Q Marker
                            </Link>
                        }

                            {/* for eveyone one */}
                            <Link to="/myClass" className="navbar-item"
                                onClick={
                                    () => dispatch(handleReceiveLgroups(authedUser._id))
                            }>
                                My Class
                            </Link>

                            <Link to="/myTask" className="navbar-item"
                                onClick={
                                    () => dispatch(handleReceiveTasks(authedUser._id))
                            }>
                                My Task
                            </Link>
                        </React.Fragment> : null
                    } </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            {
                            !authedUser ? <Fragment> {/* <Link className="button is-primary" to="/signUp">
                                    <strong>Sign up</strong>
                                </Link> */}
                                <Link className="button is-light" to="/logIn">
                                    Log in
                                </Link>
                            </Fragment> : <Fragment> {/* <Link to="/myAccount" className="button is-primary">
                                    <strong>MyAccount</strong>
                                </Link> */}
                                <Link to="/" className="button is-light"
                                    onClick={
                                        () => dispatch(logoutUser(authedUser))
                                }>
                                    Log out
                                </Link>
                            </Fragment>
                        } </div>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({authedUser, learningCycle}) {
    return {authedUser, learningCycle};
}


export default connect(mapStateToProps)(NavBar)
