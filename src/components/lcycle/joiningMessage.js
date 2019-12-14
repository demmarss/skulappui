import React from 'react'
import {
   Alert
} from 'react-bootstrap'

export default function StatusMessage({status = 'success', Component }) {
    return (
        <div> {
            status === 'success' ? 
            <Alert variant='success'>
                You have succesfully {Component+'ed'} a class
            </Alert> : <Alert variant='warning'>
                {Component+'ing'} class is not successful
            </Alert>
        } </div>

    )
}
