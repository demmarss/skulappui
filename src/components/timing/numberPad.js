import React, {useState, useContext} from 'react'
import Failure from './failureMessage'
import Success from './successMessage'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../contexts/UserContext'
import {RecordContext} from '../../contexts/RecordContext'

export default function NumberPad() {

    const [codetyped, setcodetyped] = useState([])
    const [status, setStatus] = useState('')
    const {users} = useContext(UserContext)
    const {creatingTimeRecord} = useContext(RecordContext)

    const history = useHistory();

    function handleChange(e){
        setcodetyped(e.target.value)
    }

    function handleInput(value) {
        setcodetyped([
            ...codetyped,
            value
        ].join(""))
    }

    function handleBackSpace() {
        setcodetyped([...codetyped].slice(0, codetyped.length - 1).join(""))
        setStatus('')
    }

    function handleClear() {
        setcodetyped([])
        setStatus('')
    }

    function handlingSubmitCode() {
        const userhere = users.filter(user => user.code === codetyped)
        if (userhere.length === 0) {
            const AdminCode = '123456'
            if (codetyped === AdminCode) {
                history.push("/admin");
            } else {
                setStatus('failure')
                setTimeout(handleClear, 1500);
            }
        } else {
            const userID = userhere[0]._id
            console.log("user ID ", userhere[0]._id)
            setStatus('success')
            creatingTimeRecord({userID})
            setTimeout(handleClear, 1500);
        }
    }

    const numberPadOptions = [[1, 2, 3],[4, 5, 6],[7, 8, 9],['BackSpace', 0, 'Clear']]

    return (

        <div>
            <div className="columns is-mobile">
                <div className="column"></div>
                <div className="column">
                    <div className="box">

                        <div className="field is-horizontal">
                        
                            <div className="field-body">
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-large is-primary" type="password"
                                            value={codetyped}
                                            placeholder="Type your code"
                                            onChange={handleChange}/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="columns">
                            {
                            numberPadOptions[0].map(x => <div className="column is-4" key={x}>
                                <button className="button is-large is-fullwidth is-primary is-outlined" onClick= {() => handleInput(x)}>
                                    {x}</button>
                            </div>)
                        } </div>

                        <div className="columns">
                            {
                            numberPadOptions[1].map(x => <div className="column is-4" key={x}>
                                <button className="button is-large is-fullwidth is-primary is-outlined" onClick= {() => handleInput(x)}>
                                    {x}</button>
                            </div>)
                        } </div>
                        <div className="columns">
                            {
                            numberPadOptions[2].map(x => <div className="column is-4" key={x}>
                                <button className="button is-large is-fullwidth is-primary is-outlined" onClick= {() => handleInput(x)}>
                                    {x}</button>
                            </div>)
                        } </div>
                        <div className="columns">
                            <div className="column">
                                <button className="button is-large is-fullwidth is-primary is-outlined"
                                    onClick={handleBackSpace}>BackSpace</button>
                            </div>
                            <div className="column">
                                <button className="button is-large is-fullwidth is-primary is-outlined" onClick= {() => handleInput(0)}>0</button>
                            </div>
                            <div className="column">
                                <button className="button is-large is-fullwidth is-primary is-outlined"
                                    onClick={handleClear}>Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="box">
                        {/* <h1 className='title'>
                            Code: {codetyped} </h1> */}

                        {
                        codetyped.length > 0 ? <button className="button is-large is-fullwidth is-success"
                            onClick={handlingSubmitCode}>Submit</button> : null
                    }
                        {
                        status === 'failure' ? <Failure/>: null
                    }

                        {
                        status === 'success' ? <Success/>: null
                    } </div>
                </div>
                <div className="column"></div>
            </div>

        </div>
    )
}
