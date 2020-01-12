import React, { useState, useContext, useEffect } from 'react'
import {PaymentContext} from '../../../contexts/PaymentContext'


export default function EditPaymentForm({Payment, SetStatus}){

const [amount, setAmount] = useState(Payment.amount)
const [yearPaidFor, setYear] = useState(Payment.yearPaidFor)
const [monthPaidFor, setMonthPaidFor] = useState(Payment.monthPaidFor)
const [editStatus, setEditStatus ] = useState('')

const month1 = ['January', 'February', 'March', 'April']
const month2 = ['May', 'June', 'July', 'August']
const month3 = ['September', 'October', 'November', 'December']
const allMonths = [...month1, ...month2, ...month3]

console.log('Edit Status', editStatus)

const {editingPayment, payments} = useContext(PaymentContext)

useEffect(() => {
    if (editStatus === '') {return}

    if (editStatus === 'initiated') {
        if (checkEditStatus()){ 
            setEditStatus('successful'); 
            SetStatus('editSuccessful')
        }else{
            alert('Edit is not successful')
            setEditStatus('')
        }
    } 
}, [payments]);


console.log('Edit Status222222', editStatus)

    function handleEditPayment(){
        Payment.amount = amount
        Payment.yearPaidFor= yearPaidFor
        Payment.monthPaidFor = monthPaidFor
        editingPayment(Payment)
        setEditStatus('initiated')
    }

    function checkEditStatus() { // Now check if the data is present in the payments state
        const paymentHere = payments.find(payment => payment._id === Payment._id)
            
        if (paymentHere.amount === amount) {
            return true
        } else {
            return false
        }
    }

    function handleChangeMonth(month) {
        setMonthPaidFor(month)
    }

    return <React.Fragment>
        <hr/>
        <div className='title is-1'>Edit payment</div>
        <hr/>
    <div className='columns'>
    <div className='column is-3'>
        Amount
    </div>
    <div className='column is-3'>
        Year
    </div>
    <div className='column is-3'>
        Month
    </div>
    <div className='column is-3'>
    </div>
</div>
    <div className='columns'>
    <div className='column is-3'>
        <input className='input is-primary is-medium'
            value={amount}
            type='text'
            onChange={(e)=>setAmount(e.target.value)}
            placeholder='$'/>
    </div>
    <div className='column is-3'>
        <input className='input is-primary is-medium'
            value={yearPaidFor}
            type='number'
            onChange={(e)=>setYear(e.target.value)}
            placeholder='Year'/>
    </div>
    <div className='column is-3'>
        <div className="dropdown is-up is-hoverable">
            <div className="dropdown-trigger">
                <button aria-controls="dropdown-menu4" aria-haspopup="true" className="button">
                    <span>{monthPaidFor}</span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        {
                        allMonths.map(month => <p className="navbar-item button is-hoverable"
                            onClick={
                                () => handleChangeMonth(month)
                            }
                            key
                            ={month}>
                            {month} </p>)
                    } </div>
                </div>
            </div>
        </div>
    </div>
    <div className='column is-3'>
        <p className='button is-success'
            onClick={handleEditPayment}>Edit payment</p>
    </div>
</div>
</React.Fragment>

}
