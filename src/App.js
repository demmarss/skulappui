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

function App() {
    return (
        <Router>
            <div className="App">
              <PaymentContextProvider>
                <LcycleContextProvider>
                    <UserContextProvider>
                        <RecordContextProvider>

                            <Route exact path="/"
                                component={Home}/>
                            <Route exact path="/timer"
                                component={Timing}/>
                            <Route exact path="/admin"
                                component={Admin}/>
                            <Route exact path="/lcycle"
                                component={Lcycle}/>


                        </RecordContextProvider>
                    </UserContextProvider>
                </LcycleContextProvider>
                </PaymentContextProvider>
            </div>
        </Router>

    );
}

export default App;
