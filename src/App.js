import React from 'react';
import './App.css';
import RecordContextProvider from './contexts/RecordContext';
import Home from '../src/home';
import Timing from '../src/components/timing'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Admin from '../src/components/admin';
import Lcycle from './components/lcycle';

import PaymentContextProvider from './contexts/PaymentContext';
import PickUp from './components/PickUp'
import ExpensesContextProvider from './contexts/ExpensesContext';
import Task from './components/task';
import Question from './components/question';
import Porgress from './components/Progress';
import NavBar from '../src/NavBar'
import SignUp from './components/user/CreateAcct'
import LogIn from './components/user/LogIn';
import MyAccount from './components/user/UserAcctDetail';
import ForgotPassword from './components/user/ForgotPassword'

import TaskList from './components/task/TaskList'
import ProgressList from './components/Progress/progressList'
import QuestionAnalysis from './components/QuestionAnalysis'
import ClassList from './components/lcycle/L-CycleList'
import TaskDetail from './components/task/TaskDetails'
import LCycleDetail from './components/lcycle/L-CycleDetail'

// ////////////////////////////////////////////////////////////
import Subtraction from './components/question/Subtraction'
import Addition from './components/question/Addition'
import Multiplication from './components/question/Multiplication'
import Division from './components/question/Division'
import Reading from './components/question/Reading'
import Spelling from './components/question/Spelling';

import AdditionQuestion from './components/question/Addition/displayQu'
import DivisionQuestion from './components/question/Division/displayQu'
import MultiplicationQuestion from './components/question/Multiplication/displayQu'
import SubtractionQuestion from './components/question/Subtraction/displayQu'
import SpellingQuestion from './components/question/Spelling/displayQu'
import ReadingPicMatchingQuestion from './components/question/Reading/displayQuRPicMatching'
import ReadingTextOutQuestion from './components/question/Reading/displayQuRTextOut'

import EvaluationReadingOutPictures from './components/question/Reading/displayEvaluationRTextOut'

import {connect} from 'react-redux'

import SchoolContextProvider from './contexts/SchoolContext';

function App() {
    return (
        <Router>
            <div className="App">
                <SchoolContextProvider>
                    <ExpensesContextProvider>
                        <PaymentContextProvider>
                            <RecordContextProvider>

                                <NavBar/>

                                <Route exact path="/"
                                    component={Home}/>
                                <Route exact path="/timer"
                                    component={Timing}/>
                                <Route exact path="/admin"
                                    component={Admin}/>
                                <Route exact path="/lcycle"
                                    component={Lcycle}/>
                                <Route exact path="/pickup"
                                    component={PickUp}/>
                                <Route exact path="/question"
                                    component={Question}/>
                                <Route exact path="/task"
                                    component={Task}/>
                                <Route exact path="/myProgress"
                                    component={Porgress}/>
                                <Route exact path="/signUp"
                                    component={SignUp}/>
                                <Route exact path="/logIn"
                                    component={LogIn}/>
                                <Route exact path="/myAccount"
                                    component={MyAccount}/>
                                <Route exact path="/forgotPassword"
                                    component={ForgotPassword}/>

                                <Route exact path="/myTask"
                                    component={TaskList}/>
                                <Route exact path="/task/:taskId"
                                    component={TaskDetail}/>
                                <Route exact path="/myProgress"
                                    component={ProgressList}/>
                                <Route exact path="/myQuestionAnalysis"
                                    component={QuestionAnalysis}/>
                                <Route exact path="/myClass"
                                    component={ClassList}/>
                                <Route exact path="/lgroups/:lgroupId"
                                    component={LCycleDetail}/> {/* Loading topics landing page */}

                                {/* Loading question setting pages */}
                                <Route exact path='/subtraction'
                                    component={Subtraction}/>
                                <Route exact path='/addition'
                                    component={Addition}/>
                                <Route exact path='/multiplication'
                                    component={Multiplication}/>
                                <Route exact path='/division'
                                    component={Division}/>
                                <Route exact path='/spelling'
                                    component={Spelling}/>
                                <Route exact path='/reading'
                                    component={Reading}/> {/* Loading Question dispaly pages */}
                                <Route exact path='/Additionquestion/:taskId'
                                    component={AdditionQuestion}/>
                                <Route exact path='/Divisionquestion/:taskId'
                                    component={DivisionQuestion}/>
                                <Route exact path='/Multiplicationquestion/:taskId'
                                    component={MultiplicationQuestion}/>
                                <Route exact path='/Subtractionquestion/:taskId'
                                    component={SubtractionQuestion}/>
                                <Route exact path='/Spellingquestion/:taskId'
                                    component={SpellingQuestion}/>
                                <Route exact path='/ReadingMachingTextquestion/:taskId'
                                    component={ReadingPicMatchingQuestion}/>
                                <Route exact path='/ReadingTextOutquestion/:taskId'
                                    component={ReadingTextOutQuestion}/> {/* Loading Evaluation dispaly pages */}
                                <Route exact path='/ReadingTextOutevaluation/:taskId'
                                    component={EvaluationReadingOutPictures}/>
                                <Route exact path='/evaluation/:taskId'
                                    component={EvaluationReadingOutPictures}/>


                            </RecordContextProvider>
                        </PaymentContextProvider>
                    </ExpensesContextProvider>
                </SchoolContextProvider>
            </div>
        </Router>

    );
}

export default connect()(App);
