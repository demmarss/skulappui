import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {

    function handleClick() {
        var burger = document.querySelector('.burger')
        var nav = document.querySelector('#' + burger.dataset.target);

        burger.classList.toggle('is-active')
        nav.classList.toggle('is-active');

    }


    return (
        <nav className="navbar is-black is-large">
            <div className="navbar-brand">
                <span className="navbar-burger burger" data-target="navbarMenuHeroB"
                    onClick={handleClick}>
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
                    </Link>
                </div>

                <div className="navbar-end">
                    <Link className="navbar-item" to='/'>
                        <button className='button is-default'>
                        Log In
                        </button>
                    </Link>
                    <Link className="navbar-item" to='/'>
                        <button className='button is-default'>
                        Log Out
                        </button>
                    </Link>
                    <Link className="navbar-item" to='/'>
                        <button className='button is-default'>
                        Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
