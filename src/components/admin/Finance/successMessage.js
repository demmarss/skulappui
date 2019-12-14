import React from 'react'

export default function SuccessMessage (){
    return(
        <div>
            <article className="message is-success">
                <div className="message-header">
                    <p>Search successful</p>
                </div>
                <div className="message-body">
                    Payment Successful
                </div>
            </article>
        </div>
    )
}