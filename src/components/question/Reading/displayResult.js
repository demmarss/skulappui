import React, { Component } from 'react'

export default class DisplayResult extends Component {


     
    render (){
        const { task, correctArray, resetState } = this.props

        const Result = correctArray.length *100/task.questions.length
        
        return (

            <div>
                <h1 className='title'>Your result is: {parseInt(Result)} %</h1>
                
                <p className="button is-success" onClick={resetState}>Try Again</p>
    
                {/* <p className="button is-primary">Click to see Progress</p> */}
    
            </div>
        )
    }
    
}
