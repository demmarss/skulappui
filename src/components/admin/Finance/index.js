import React, {useState} from 'react'
import PaymentForm from './payment'
import SearchBar from '../searchBar/searchBar'
import Expenses from './expenses'
import ExpensesForm from './expenseForm'

export default function Finance({users}) {
    const [status, setStatus] = useState('')
    const [userHere, setUserHere] = useState('')

    function handleSearch(mobile) {
        const family = users.filter(user => user.mobile === mobile)
        const userhere2 = family.length < 1? family.find(user => user.role === "Parent" ): undefined
        if (userhere2 !== undefined) {
            setStatus('success')
            setUserHere(userhere2)

        } else {
            setStatus('failure')
            setUserHere({})
        }
    }

    return (
    <div className='container'>
        <h1 className='title' > Finance</h1> {/* <Income/>
                <Expenses/>
                <CurrentBalance/> */}
        
            <div className='columns'>
                <div className='column is-3'>
                    <p className='button is-blocked is-warning' onClick={()=> setStatus('newExpenses')}>New expenses</p>
                </div>
                <div className='column is-3'>
                    <p className='button is-blocked is-primary' onClick={()=> setStatus('newPayment')}>New payment</p>
                </div>
                <div className='column is-3'>
                    <p className='button is-blocked is-success' onClick={()=> setStatus('expHistory')}>Expenses History</p>
                </div>
                <div className='column is-3'>
                    <p className='button is-blocked is-success' onClick={()=> setStatus('expHistory')}>Send payment reminder</p>
                </div>

            </div>

        
        <div className='columns'></div>
    

        {status === 'newExpenses'? <ExpensesForm Status={status} />:null}
        {status === 'expHistory'? <Expenses Status={status} />:null}

   {status === 'newPayment'? <SearchBar Search={handleSearch}
        Status={status}
        SetStatus={setStatus}/>:null}


{
        status === 'success' ? userHere.role === 'Student' ? <PaymentForm user={userHere}
            Users={users}/> : null : null
    } {
        status === 'success' ? userHere.role === 'Parent' ? <PaymentForm user={userHere}
            Users={users}/> : null : null
    } 
    
    </div>
    )
}
