import React, { useState } from 'react'
import {
    Button,
    InputGroup,
    FormControl
} from 'react-bootstrap'
import StatusMessage from './joiningMessage';


export default function CreateLcycle(){
    const [displayMessage, setDisplayMessage] = useState(false);
    const [creatingStatus, setCreatingStatus] = useState('');

    function handleCreating(){
        setDisplayMessage(true)
        // if success
        setCreatingStatus('success')
        
    }

    return (
        <div>
        <InputGroup size="lg">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">Enter class title </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-describedby="inputGroup-sizing-sm" aria-label="Large"/>
                    </InputGroup>
                    <br/>
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">Enter class description </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-describedby="inputGroup-sizing-sm" aria-label="Large"/>
                    </InputGroup>
                    <br/>
                    <Button variant="primary" onClick={handleCreating} >Click to create</Button>

                    {displayMessage? <StatusMessage status={creatingStatus} Component = {'Creat'}/>:null}
        </div>
    )
}