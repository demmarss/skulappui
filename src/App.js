import React from 'react';
import './App.css';
import RecordContextProvider from './contexts/RecordContext';
import UserContextProvider from './contexts/UserContext';
import Home from './components/';
import Timing from '../src/components/timing'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Admin from '../src/components/admin';
import Lcycle from './components/lcycle';
import LcycleContextProvider from './contexts/LcycleContext';
import PaymentContextProvider from './contexts/PaymentContext';
import PickUp from './components/PickUp'
import NavBar from './NavBar';
import ExpensesContextProvider from './contexts/ExpensesContext';

function App() {
    return (
        <Router>
            <div className="App">
                <ExpensesContextProvider>
                    <PaymentContextProvider>
                        <LcycleContextProvider>
                            <UserContextProvider>
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


                                </RecordContextProvider>
                            </UserContextProvider>
                        </LcycleContextProvider>
                    </PaymentContextProvider>
                </ExpensesContextProvider>
            </div>
        </Router>

    );
}

export default App;
