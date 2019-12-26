import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Question extends Component {
    render(){
        return(

<section className="hero is-dark is-fullheight">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        Questions
      </h1>
      <div className="columns is-mobile is-centered">
                    <Link to='/subtraction' className='column is-4'>
                        <div className=" notification is-primary ">
                            <p className="title ">
                            Subtraction
                            </p>
                        </div>
                    </Link>
                    <Link to='/addition' className='column is-4'>
                    <div className=" notification is-success">
                            <p className="title">
                            Addition
                            </p>
                        </div>
                    </Link>
                    <Link to='/multiplication' className='column is-4'>
                    <div className=" notification is-primary">
                            <p className="title">
                            Multiplication
                            </p>
                        </div>
                    </Link>
                </div>
                <div className='columns is-centered'>
                <Link to='/division' className='column is-4'>
                    <div className=" notification is-success">
                            <p className="title">
                            Division
                            </p>
                        </div>
                    </Link>
                    <Link to='/reading' className='column is-4'>
                    <div className=" notification is-primary">
                            <p className="title">
                            Reading
                            </p>
                        </div>
                    </Link>
                    <Link to='/division' className='column is-4'>
                    <div className=" notification is-success">
                            <p className="title">
                            Spelling
                            </p>
                        </div>
                    </Link>
                </div>
    </div>
  </div>
</section>
        )
    }
}

export default Question