import React from 'react'
import {
    Alert
} from 'react-bootstrap'

export default function LearnMore(){
    return(
        <Alert variant="light">
  <Alert.Heading>Creating a class </Alert.Heading>
  <p>
    This section is for you to create mini study group for your students. 
    Fill in the class title/code and then enter the description for the class. 
    This information will be helpful to recall the class purpose.
  </p>
  <p className="mb-0">
    After creating the class, we will generate a code to be given to the student to join. 
    If you choose a learning group, then while creating the learning cycle, then all students in the learning cycle will automatically added.
  </p>
  <hr />
  <Alert.Heading>Joining a class </Alert.Heading>
  <p className="mb-0">
    Simply type in the code and you will be able to join the class. 
  </p>
</Alert>
    )
}