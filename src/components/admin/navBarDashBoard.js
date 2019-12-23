import React from 'react'
import {Link} from 'react-router-dom'


export default function NavBarDashBoard({SetStatus, SourcePage }) {

    function handleClick() {
        var burger = document.querySelector('.burger')
        var nav = document.querySelector('#' + burger.dataset.target);
        burger.classList.toggle('is-active')
        nav.classList.toggle('is-active');

    }

    return (
        <nav aria-label="main navigation" className="navbar is-dark" role="navigation">
            <div className="navbar-brand">
                <p aria-expanded="false" aria-label="menu" className="navbar-burger burger" data-target="navbarBasicExample" role="button"
                    onClick={handleClick}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </p>
            </div>

            <div className="navbar-menu" id="navbarBasicExample">
                <div className="navbar-start">

                    <Link className='button is-success' to='/'>
                        Home
                    </Link>
                    <Link className='button is-warning' to='/timer'>
                        Timer_Attendance
                    </Link>
                    <Link className='button is-info' to='/lcycle'>
                        Learning_Cycle
                    </Link>
                    <Link className='button is-success' to='/pickUp'>
                        Pick_Up
                    </Link>
                </div>
            </div>
        </nav>
    )
}
