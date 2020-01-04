import React, {useState} from 'react'
import SuccessMessage from './successMessage'
import FailureMessage from './failureMessage'

export default function SearchBar({Search, Status, SetStatus}) {

    const [code, setCode] = useState('')
    const [hide, setHide]=useState(false)
    
    function handleChange(e) {
        setCode(e.target.value)
        e.preventDefault()
    }

    function handleSearch(e) {
        if (code === "") {
            return alert("Kindly fill in the code")
        }
        Search(code)
        setHide(true)
        setCode('')
    }

    function handleReset(){
        setHide(false)
        setCode('')
        SetStatus('')
        
    }

    return (
        <div>
            {!hide? 
            <React.Fragment>
            <input className="input"
                type='text'
                value={code}
                placeholder='Enter mobile number'
                onChange={handleChange}/>

            <p className="button is-medium is-success"
                disabled={
                    code === ""
                }
                onClick={handleSearch}>Search Code
            </p>
            </React.Fragment>: null}
            <p className="button is-medium is-warning is-inverted"
                onClick={handleReset}>Search again
            </p>
            {Status === 'success'? <SuccessMessage Reset={handleReset}/>:null}
            {Status === 'failure'? <FailureMessage Reset={handleReset}/>:null}

        </div>
    )

}
