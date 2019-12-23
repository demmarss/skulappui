import React from 'react'
import {Link} from 'react-router-dom'
// import logo from './logo.jpg'

export default function LandingPage() {

    return (
        <section className="hero is-medium">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1">
                        OlisticLMS+
                    </h1>
                    <p className="subtitle">
                        We offer all you need to manage your school & engage your students
                    </p>

                    <div className='columns'>
                        <div className='column'>
                            <Link className='tile title notification is-primary ' to='/timer'>
                                    Timer App
                            </Link>
                        </div>
                        <div className='column'>
                            <Link className='tile title notification is-success ' to='/admin'>
                                    Admin App
                            </Link>
                        </div>
                        <div className='column'>
                            <Link className='tile title notification is-primary ' to='/pickup'>
                                    PickUp App
                            </Link>
                        </div>
                        <div className='column'>
                            <Link className='tile title notification is-primary ' to='/lcycle'>                                
                                    Learning Cycle                                
                            </Link>
                        </div>
                        <div className='column'>
                            <Link className='tile title notification is-warning ' to='/'>
                                    Question App  
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
