import React, {Component} from 'react'

class CreateTaskTrigger extends Component {

    render (){
        return(
            <div className="field">
                <p className="control">
                    <button className="button is-warning">
                    Create Task
                    </button>
                </p>
            </div>
        )
    }
}

export default CreateTaskTrigger