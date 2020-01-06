import React from 'react'

export default function MyProfile({
    user,
    GetMyParent = {}
}) {
    return (
        <div>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-128x128">
                        {/* <img src=""/> */} </p>
                </figure>
                <div className="media-content">
                    <div className="content">

                        <div className="columns">
                            <div className='column'>
                                <p>
                                    <strong>{
                                        user.name
                                    }</strong>
                                </p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className='column'>
                                <p>

                                    Role:
                                </p>

                            </div>
                            <div className='column'>
                                <small>{
                                    user.role
                                }</small>
                            </div>
                        </div>
                        <div className="columns">
                            <div className='column'>
                                <p>

                                    Mobile:
                                </p>

                            </div>
                            <div className='column'>
                                <small>{
                                    user.mobile
                                }</small>
                            </div>
                        </div>
                        <div className="columns">
                            <div className='column'>
                                <p>

                                    Code:
                                </p>

                            </div>
                            <div className='column'>
                                <small>{
                                    user.code
                                }</small>
                            </div>
                        </div>

                        {
                        user.role === 'Student' ? <div className="columns">
                            <div className='column'>
                                Parent Code:
                            </div>
                            <div className='column'>
                                {
                                GetMyParent(user.parentId).code
                            } </div>
                        </div> : null
                    } </div>
                    {/* <nav className="level is-mobile">
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
                    </nav> */} </div>
            </article>
        </div>
    )
}
