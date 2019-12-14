import React, { useState } from 'react'
import {
    Button,
    InputGroup,
    FormControl
} from 'react-bootstrap'

import StatusMessage from './joiningMessage'

export default function JoinLcycle(){
    const [displayJoinMessage, setDisplayJoinMessage] = useState(false);
    const [joiningStatus, setJoiningStatus] = useState('');
    
    function handleJoining(){
        setDisplayJoinMessage(true)
        // if success
        setJoiningStatus('success')
        
    }

    return (
        <div>
      <InputGroup size="lg">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">Enter your code </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-describedby="inputGroup-sizing-sm" aria-label="Large"/>
                    </InputGroup>
                    <br/>
                    <Button variant="success" onClick={handleJoining}>Click to join</Button>

                    {displayJoinMessage? <StatusMessage status={joiningStatus} Component = {'Join'}/>:null}
        </div>
    )
}