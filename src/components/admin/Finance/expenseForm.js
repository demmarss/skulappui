import React, { useContext, useState } from 'react'
import { ExpensesContext } from '../../../contexts/ExpensesContext'

export default function ExpensesForm () {


    const[amount, setAmount]=useState('')
    const[description, setDescription]=useState('')
    const[file, setFile]=useState(null)
    const[qUploaded, setqUploaded]=useState('')

    
    const {creatingExpenses } = useContext(ExpensesContext)
    let formData = new FormData();

    function handleSubmit(e){
   
        formData.append('expenseSupportDoc', file);
        formData.append('amount', amount);
        formData.append('description', description);

        creatingExpenses(formData)

        e.preventDefault()
    }

    function handleChangeFile (e) {
        setqUploaded("file is-warning")
        setFile(e.target.files[0])
      };

    return (
        <div>
            <input className='input box' type='text' value={amount} placeholder='Enter amount ' onChange={(e)=> setAmount(e.target.value)}/>
            <input className='textarea box' type='text' value={description} placeholder="Enter description" onChange={(e)=> setDescription(e.target.value)}/>
            <div className={qUploaded} onChange={(e)=> handleChangeFile(e)}>
                                <label className="file-label">
                                    <input className="file-input" type="file" name="questionImage"/>
                                    <span className="file-cta">
                                    <span className="file-label">
                                        Upload Question
                                    </span>
                                    </span>
                                </label>
                            </div>
            <p className='button is-success' onClick={handleSubmit}>Submit</p>
       </div>
    )
}