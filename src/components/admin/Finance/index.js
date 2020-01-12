import React, {useState, useContext, useEffect} from 'react'
import PaymentForm from './payment'
import SearchBar from '../searchBar/searchBar'
import Expenses from './expenses'
import ExpensesForm from './expenseForm'

import {ExpensesContext} from '../../../contexts/ExpensesContext'
import {PaymentContext} from '../../../contexts/PaymentContext'
import DailyFeeCollection from './dailyFeeCollection'
import EditPaymentForm from './editPaymentForm'


export default function Finance({users}) {
    const [status, setStatus] = useState('')
    const [payment, setToEditPayment] = useState(null)
    const [userHere, setUserHere] = useState('')
    const {getingExpenses} = useContext(ExpensesContext)
    

    useEffect(() => {
        getingExpenses()
    }, []);

    const {getingPayments} = useContext(PaymentContext)

    useEffect(() => {
        getingPayments()
    }, []);

    function handleSearch(mobile) {
        const family = users.filter(user => user.mobile === mobile)
        const userhere2 = family.length >= 1 ? family.find(user => user.role === "Parent") : undefined
        if (userhere2 !== undefined) {
            setStatus('success')
            setUserHere(userhere2)

        } else {
            alert('Not successful, try another number')
            setStatus('failure')
            setUserHere({})
        }
    }

    return (
        <div className='container'>
            <h1 className='title'>
                Finance</h1>
            <DailyFeeCollection/>
            <br/>
            <br/> 
            <div className='columns'>
                <div className='column is-3'>
                    <p className='button is-blocked is-warning' onClick={() => setStatus('newExpenses')}>New expenses</p>
                </div>
                <div className='column is-3'>
                    <p className='button is-blocked is-primary' onClick={() => setStatus('newPayment')}>New payment</p>
                </div>
                <div className='column is-3'>
                    <p className='button is-blocked is-success' onClick={() => setStatus('expHistory')}>Expenses History</p>
                </div>
                <div className='column is-3'>
                    <p className='button is-blocked is-success' onClick={() => setStatus('expHistory')}>Send payment reminder</p>
                </div>
            </div>
            <div className='columns'></div>
            {status === 'newExpenses' ? <ExpensesForm Status={status}/> : null}
            {status === 'expHistory' ? <Expenses Status={status}/> : null}
            {status === 'newPayment' ? <SearchBar Search={handleSearch} Status={status} SetStatus={setStatus}/> : null}
            {status === 'success' ? userHere.role === 'Student' ? <PaymentForm user={userHere} Users={users} SetStatus={setStatus} SettingPayment={setToEditPayment}/> : null : null}
            {status === 'success' ? userHere.role === 'Parent' ? <PaymentForm user={userHere} Users={users} SetStatus={setStatus} SettingPayment={setToEditPayment}/> : null : null}
            {status === 'editPayment'? <EditPaymentForm SetStatus={setStatus} Payment={payment}/>:null}
            {status === 'editSuccessful'? successMessage():null}
            
            </div>
    )
}


function successMessage (){
    return(
        <div>
            <article className="message is-success">
                <div className="message-header">
                    <p>Edit status</p>
                </div>
                <div className="message-body">
                    Your editing is  successful
                </div>
            </article>
        </div>
    )
}