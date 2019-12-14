import React from 'react'

export default function MyProfile({user}) {
    return (
        <div>
            My profile here
            <article className="media">
                <figure className="media-left">
                    <p className="image is-128x128">
                        {/* <img src=""/> */}
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">

                        <p>
                            <strong>{
                                user.name
                            }</strong>
                        </p>

                        <p>
                            Role:
                            <small>{
                                user.role
                            }</small>
                        </p>

                        <p>
                            Code:
                            <small>{
                                user.code
                            }</small>
                        </p>

                        {
                        user.role === 'student' ? <p>Parent Code:
                            <small>{
                                user.parentId
                            }</small>
                        </p> : null
                    }

                        <p>
                            Some message here</p>

                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <p className="button level-item">
                                Delete
                            </p>
                            <p className="button level-item">
                                Edit
                            </p>
                            <p className="button level-item"
                            //     onClick={
                            //         () => handleGetIdCard(user.code)
                            // }
                            >
                                Print Id-Card
                            </p>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    )
}
