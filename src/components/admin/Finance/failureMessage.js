import React from 'react'

export default function FailureMessage (){
    return(
        <div>
            <article className="message is-danger">
                <div className="message-header">
                    <p>Search unsuccessful</p>
                </div>
                <div className="message-body">
                    Payment not successful
                </div>
            </article>
        </div>
    )
}