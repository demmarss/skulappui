import React from 'react'
import {Link} from 'react-router-dom'
// import logo from './logo.jpg'

export default function LandingPage() {

    function handleClick() {
        var burger = document.querySelector('.burger')
        var nav = document.querySelector('#' + burger.dataset.target);

        burger.classList.toggle('is-active')
        nav.classList.toggle('is-active');

    }
    

    return (
        <section className="hero is-info is-medium">
            
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <span className="navbar-burger burger" data-target="navbarMenuHeroB"
                                onClick={handleClick}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div className="navbar-menu" id="navbarMenuHeroB">
                            <div className="navbar-end">
                                <span className="navbar-item">
                                    <p className="button is-primary is-inverted">
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>
                                        <span>Log In</span>
                                    </p>
                                </span>
                                <span className="navbar-item">
                                    <p className="button is-warning is-inverted">
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>
                                        <span>Sign Up</span>
                                    </p>
                                </span>
                                <span className="navbar-item">
                                    <p className="button is-info is-inverted">
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>
                                        <span>Log Out</span>
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

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
                            <div className='box has-background-info'>
                                <p className="button is-inverted is-large">
                                    <Link to='/timer'>
                                        Timer App
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className='column'>
                            <div className='box has-background-info'>
                                <p className="button is-inverted is-large">
                                    <Link to='/admin'>
                                        Admin App
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className='column'>
                            <div className='box has-background-info'>
                                <p className="button is-inverted is-large">
                                    <Link to='/pickup'>
                                        PickUp App
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='columns'>
                        <div className='column'>
                            <div className='box has-background-info'>
                                <p className="button is-inverted is-large">
                                    <Link to='/'>
                                        ClassViewn App
                                    </Link>
                                </p>
                            </div>

                        </div>

                        <div className='column'>
                            <div className='box has-background-info'>
                                <p className="button is-inverted is-large">
                                    <Link to='/'>
                                        Call/Textn App
                                    </Link>
                                </p>
                            </div>

                        </div>

                        <div className='column'>
                            <div className='box has-background-info'>
                                <p className="button is-inverted is-large">
                                    <Link to='/'>
                                        Question App
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='columns'>
                    <div className='column is-4'>
                            <div className='box has-background-info'>
                                <p className="button is-inverted is-large">
                                    <Link to='/lcycle'>
                                        LearningCycle
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                    <div className="container">
                        <ul>
                            <li className="is-active">
                                <a href='/aboutUS'>About Us </a>
                            </li>
                            <li>
                                <a href='/vissionMission'>Vission & Mission</a>
                            </li>
                            <li>
                                <a href='/productInfo'>Products</a>
                            </li>
                            <li>
                                <a href='/updates'> Updates</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}
