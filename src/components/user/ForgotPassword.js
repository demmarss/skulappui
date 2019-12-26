import React, {Component} from 'react'

class ForgotPassword extends Component {
    render(){
        return(
            <div className="columns is-mobile is-centered">
                <div className="column is-4">
                <h3 class="title has-text-grey">Need Password Help!</h3>
                <p class="subtitle has-text-grey">Tell us your email</p>
                <div class="box">
                    <form>
                        <div class="field">
                            <div class="control">
                                <input class="input" type="email" placeholder="Your Email" autoFocus=""/>
                            </div>
                        </div>
                        <button class="button is-block is-danger is-fullwidth">Retrieve Password</button>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default ForgotPassword