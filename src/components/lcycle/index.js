import React, {useState} from 'react'
import {
    Container,
    Jumbotron,
    Button,
    Navbar,
} from 'react-bootstrap'
import JoinLcycle from './joinLcycle';
import CreateLcycle from './createLcycle';
import LearnMore from './learnMore';
// import JoiningMessage from './joiningMessage';


export default function Lcycle() {

    const [showCreateLC, toggleShowCreateLC] = useState(false);
    const [showJoinLC, toggleShowJoinLC] = useState(false);
    const [showLearnMore, toggleShowLearnMore] = useState(false);
        

    function handletoggleShowCreateLC(){
        toggleShowCreateLC(!showCreateLC)
        toggleShowJoinLC(false)
        toggleShowLearnMore(false)
    }

    function handleJoinLC(){
        toggleShowCreateLC(false)
        toggleShowJoinLC(!showJoinLC)
        toggleShowLearnMore(false)
    }

    function handleLearnMore(){
        toggleShowCreateLC(false)
        toggleShowJoinLC(false)
        toggleShowLearnMore(!showLearnMore)
    }
    

    return (
        <Container>
            <Navbar bg="light" expand="lg" variant="light">
                <Navbar.Brand href="/">Home</Navbar.Brand>
            </Navbar>
            <Jumbotron>
                <h1>Learning Cycle App
                </h1>
                <p>
                    Here you can create a new learning cycle for your students
                </p>
                <p>
                    <Button variant="outline-primary" onClick={handleLearnMore}>Learn more</Button>
                </p>

                <p>
                    <Button variant="outline-info"
                        onClick={
                            handletoggleShowCreateLC
                    }>Create a new learning cycle</Button>

                    <Button variant="outline-success"
                        onClick={
                            handleJoinLC
                    }>Join learning cycle</Button>
                </p>

                {showJoinLC ? <JoinLcycle/>: null }

                {showCreateLC ? <CreateLcycle/>: null} 
            { showLearnMore? <LearnMore/>:null }
            
            </Jumbotron>
        </Container>


    )
}
