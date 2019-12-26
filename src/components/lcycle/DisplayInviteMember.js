import React, {Component} from 'react'

class DisplayInivteMember extends Component {

    render (){
        return(
            <div className="field">
                <p className="control">
                    <button className="button is-success" onClick={this.props.inviteMember}>
                    Invite Member
                    </button>
                </p>
            </div>
        )
    }
}

export default DisplayInivteMember