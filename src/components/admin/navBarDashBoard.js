import React from 'react'


export default function NavBarDashBoard() {

    return (
        <nav aria-label="main navigation" className="navbar is-dark" role="navigation">
            <div className="navbar-brand">
                <p aria-expanded="false" aria-label="menu" className="navbar-burger burger" data-target="navbarBasicExample" role="button">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </p>
            </div>

            <div className="navbar-menu" id="navbarBasicExample">
                <div className="navbar-start">
                    <a className="navbar-item" href='/'>
                        Home
                    </a>
                    <a className="navbar-item" href='/timer'>
                        Timer/Attendance
                    </a>
                    <a className="navbar-item" href='/lcycle'>
                        Learning Cycle
                    </a>
                    <a className="navbar-item" href='/pickUp'>
                        Pick Up
                    </a>
                </div>
            </div>
        </nav>
    )
}
