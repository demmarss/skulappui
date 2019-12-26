import React, {Component} from 'react'

class InviteMember extends Component {
    render (){
        return (
            <div>
                <div className="card">
                    <header className="card-header">
                        <h2 className="title is-4">Invite Member</h2>
                    </header>
                    <div className="card-content">
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Enter username or email separted by comma"/>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-warning">
                                Send invitation
                                </button>
                            </p>
                        </div>                  
                    </div>
                </div>
            </div>
        )
    }
}

export default InviteMember