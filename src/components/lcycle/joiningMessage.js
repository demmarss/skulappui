import React from 'react'

export default function StatusMessage({status = 'success', Component }) {
    return (
        <div> {
            status === 'success' ? 
            <p>
                You have succesfully {Component+'ed'} a class
            </p> : <p>
                {Component+'ing'} class is not successful
            </p>
        } </div>

    )
}
