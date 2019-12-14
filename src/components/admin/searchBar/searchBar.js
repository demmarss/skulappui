import React, {useState} from 'react'
import SuccessMessage from './successMessage'
import FailureMessage from './failureMessage'

export default function SearchBar({Search, Status, SetStatus}) {

    const [code, setCode] = useState('')
    
    function handleChange(e) {
        setCode(e.target.value)
        e.preventDefault()
    }

    function handleSearch(e) {
        if (code === "") {
            return alert("Kindly fill in the code")
        }

        Search(code)
    }

    function handleReset(){
        setCode('')
        SetStatus('')
        
    }

    return (
        <div>
            <input className="input"
                type='text'
                value={code}
                placeholder='Enter code'
                onChange={handleChange}/>

            <p className="button is-large is-success"
                disabled={
                    code === ""
                }
                onClick={handleSearch}>Search Code
            </p>

            {Status === 'success'? <p className="button is-large is-warning is-inverted"
                onClick={handleReset}>Reset
            </p>
            
            :null}


            

            {Status === 'success'? <SuccessMessage/>:null}
            {Status === 'failure'? <FailureMessage/>:null}

        </div>
    )

}
