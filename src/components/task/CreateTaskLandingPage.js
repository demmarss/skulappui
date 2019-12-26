import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class CreatTaskLandingPage extends Component {
    render(){
        return(
            <div>
                <div className="columns is-mobile is-multiline is-centered">
                    <Link to='/subtraction'>
                        <div className="column">
                            <p className="title tile bd-notification is-primary">
                            Subtraction
                            </p>
                        </div>
                    </Link>
                    <Link to='/addition'>
                        <div className="column is-narrow">
                            <p className="bd-notification is-primary">
                            <code className="html">Addition</code><br/>
                            Addition
                            </p>
                        </div>
                    </Link>
                    <Link to='/multiplication'>
                        <div className="column is-narrow">
                            <p className="bd-notification is-primary">
                            <code className="html">Multiplication</code><br/>
                            Multiplication
                            </p>
                        </div>
                    </Link>
                    <Link to='/division'>
                        <div className="column is-narrow">
                            <p className="bd-notification is-primary">
                            <code className="html">Division</code><br/>
                            Division
                            </p>
                        </div>
                    </Link>
                    <Link to='/reading'>
                        <div className="column is-narrow">
                            <p className="bd-notification is-primary">
                            <code className="html">Reading</code><br/>
                            Reading
                            </p>
                        </div>
                    </Link>
                    <Link to='/spelling'>
                        <div className="column is-narrow">
                            <p className="bd-notification is-primary">
                            <code className="html">Spelling</code><br/>
                            Spelling
                            </p>
                        </div>
                    </Link>
                    <div className="column is-narrow">
                        <p className="bd-notification is-primary">
                        <code className="html">Arithmetics</code><br/>
                        First Column
                        </p>
                    </div>
                    <div className="column is-narrow">
                        <p className="bd-notification is-primary">
                        <code className="html">Fraction</code><br/>
                        Our Second Column
                        </p>
                    </div>
                    <div className="column is-narrow">
                        <p className="bd-notification is-primary">
                        <code className="html">Terminology</code><br/>
                        The Fourth Column
                        </p>
                    </div>
                    <div className="column is-narrow">
                        <p className="bd-notification is-primary">
                        <code className="html">WordProblem</code><br/>
                        Fifth Column
                        </p>
                    </div>
                    <div className="column is-narrow">
                        <p className="bd-notification is-primary">
                        <code className="html">UnitConversion</code><br/>
                        Sixth Column
                        </p>
                    </div>
                    <div className="column is-narrow">
                        <p className="bd-notification is-primary">
                        <code className="html">Timing</code><br/>
                        Seventh Column
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatTaskLandingPage