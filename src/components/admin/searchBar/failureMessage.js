import React from 'react'

export default function FailureMessage ({Reset}){
    return(
        <div>
            <article className="message is-danger">
                <div className="message-header">
                    <p>Search unsuccessful</p>
                </div>
                <div className="message-body">
                    Your search gave 0 results
                    Kindly get the code again
                    Then perform the search again
                </div>
               
            </article>
        </div>
    )
}