import React, {useState, useEffect, useContext} from 'react'
import {PaymentContext} from '../../../contexts/PaymentContext'
import SuccessMessage from './successMessage'
import FailureMessage from './failureMessage'

const date = new Date();export default function PaymentForm({user, Users}) {

const [amount, setAmount] = useState('')
const [year, setYear] = useState(date.getFullYear())
const [family, setFamily] = useState([])
const [monthPaidFor, setMonthPaidFor] = useState('Month')
const [paymentStatus, setPaymentStatus] = useState('')
const [showPaymentForm, setShowPaymentForm] = useState(true)
const [isPayamentInitiate, setPaymeInitiated] = useState(false)
const [paymentHistory, setPaymentHistory] = useState([])

const {creatingPayment, payments} = useContext(PaymentContext)

useEffect(() => {
    let result = getFamily()
    setFamily(result)
    let parent = result.find(x => x.role === "Parent")
    const allParentPayment = payments.filter(payment => payment.parentId == parent._id)
    setPaymentHistory(allParentPayment)
}, []);

useEffect(() => {
    if (isPayamentInitiate === false) {
        return
    }

    if (checkPaymentStatus()) {
        setPaymentStatus('success')
        setShowPaymentForm(false)
    } else {
        setShowPaymentForm(true)
        setPaymentStatus('failure')
    }
}, [payments]);


const month1 = ['January', 'February', 'March', 'April']
const month2 = ['May', 'June', 'July', 'August']
const month3 = ['September', 'October', 'November', 'December']
const allMonths = [
    ... month1,
    ... month2,
    ... month3
]


function handleSubmitPayment() {
    let payment = {
        collectorId: '',
        parentId: getParent()._id,
        amount,
        datePayment: new Date(),
        monthPaidFor,
        year
    }

    // first send data to backend
    creatingPayment(payment)
    setPaymeInitiated(true)
}

function checkPaymentStatus() { // Now check if the data is present in the payments state
    const allParentPayment = payments.filter(payment => payment.parentId == getParent()._id)
    // check this month payment
    const isThisMonthPaidFor = allParentPayment.filter(x => x.monthPaidFor === monthPaidFor)

    if (isThisMonthPaidFor.length > 0) {
        return true
    } else {
        return false
    }
}


function handleChangeMonth(month) {
    setMonthPaidFor(month)
}

function monthPad(x) {
    return (
        <div className='column is-3'
            key={x}>
            <div className={
                'box ' + setPaymentStatusColor(year, x)
            }>
                <p> {
                    getPaymentHistory(year, x)
                } </p>

                {x} </div>
        </div>
    )
}


function handleChange(e) {
    setAmount(e.target.value)
    e.preventDefault()
}


function changeYear(effect) {
    if (effect === 'increase') {
        setYear(year + 1)
    } else {
        setYear(year - 1)
    }
}

function getFamily() {
    let family = []
    // check the role
    if (user.role === "Student") { // if student, getParent, and then kids,
        let parent = Users.find(x => x._id === user.parentId)
        family.push(parent)
        let kids = getKids(parent._id)
        family = [
            ... family,
            ... kids
        ]
    } else if (user.role === "Parent") { // if parent, getKids
        let kids = getKids(user._id)

        family.push(user)
        family = [
            ... family,
            ... kids
        ]
    } else {
        family = []
    }
    return(family)
}


function getKids(parentId) {
    const studentArray = Users.filter(user => user.parentId === parentId)
    return studentArray
}

function getParent() {
    let parent = family.find(x => x.role === 'Parent')
    return parent
}

function getPaymentHistory(year, month) { // check this month and year payment
    const isThisMonthPaidFor = paymentHistory.filter(x => x.monthPaidFor === month)
    const isThisYearPaidFor = isThisMonthPaidFor.filter(x => x.yearPaidFor === year.toString())
    if (isThisYearPaidFor.length > 0) {
        return isThisYearPaidFor[0].amount
    } else {
        return('UnPaid')
    }
}

function setPaymentStatusColor(year, month) {
    if (getPaymentHistory(year, month) === 'UnPaid') {
        return 'has-background-danger'
    } else {
        return 'has-background-success'
    }

}
function getKidsFromFamily() {
    return getKids(getParent()._id)
}

function getFee(grade) {

    switch (grade) {
        case 'Class 1':
            return 60
        case 'Class 2':
        case 'Class 3':
            return 50
        case 'Class 4':
            return 50
        default:
            return 0
    }
}

function getTotalFee() {
    let totalFee = 0
    const kids = getKidsFromFamily()
    kids.map(kid => totalFee += getFee(kid.grade))
    return totalFee
}


return (
    <div className="tile is-ancestor">
        <div className="tile is-vertical is-12">
            <div className="tile">
                {
                showPaymentForm ? <React.Fragment>
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification is-primary">
                            <p className="title">Parent Info</p>
                            {
                            family.length > 0 ? <p className="subtitle">Name: {
                                getParent().name
                            }</p> : null
                        } </article>
                        <article className="tile is-child notification is-warning">
                            <p className="title">Kid(s) Info</p>
                            {
                            family.length > 0 ? getKidsFromFamily().map(kid => <div className='columns'
                                key={
                                    kid.code
                            }>
                                <div className='column'>
                                    <p>{
                                        kid.name
                                    }</p>
                                </div>
                                <div className='column'>
                                    <p>{
                                        kid.grade
                                    }</p>
                                </div>
                                <div className='column'>
                                    <p>{
                                        getFee(kid.grade)
                                    }</p>
                                </div>
                            </div>) : null
                        }
                            {
                            family.length > 0 ? <div>Total: {
                                getTotalFee()
                            }</div> : null
                        } </article>
                    </div>


                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info">
                            <p className='title'>Payment History</p>
                            <div className='level'>
                                <div className='level-item'>
                                    <div className="field has-addons">
                                        <p className='button is-inverted'
                                            onClick={
                                                () => changeYear('decrease')
                                        }>
                                            Previous
                                        </p>
                                        <p className="title">
                                            {year}</p>
                                        <p className='button is-inverted'
                                            onClick={
                                                () => changeYear('increase')
                                        }>
                                            Next
                                        </p>
                                    </div>
                                </div>


                            </div>

                            <div className='columns'>
                                {
                                month1.map(month => monthPad(month))
                            } </div>
                            <div className='columns'>
                                {
                                month2.map(month => monthPad(month))
                            } </div>
                            <div className='columns'>
                                {
                                month3.map(month => monthPad(month))
                            } </div>

                            <p className="subtitle">Payment form</p>
                            {
                            paymentForm()
                        } </article>
                    </div>
                </React.Fragment> : null
            } </div>
            {
            paymentStatus === 'success' ? <SuccessMessage/>: null
        }
            {
            paymentStatus === 'failure' ? <FailureMessage/>: null
        } </div>
    </div>
)

function paymentForm() {
    return (
        <div className='columns'>
            <div className='column is-3'>
                <input className='input is-primary is-medium'
                    value={amount}
                    type='text'
                    onChange={handleChange}
                    placeholder='$'/>
            </div>
            <div className='column is-3'>
                <input className='input is-primary is-medium'
                    value={year}
                    type='text'
                    onChange={handleChange}
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
                    onClick={handleSubmitPayment}>Submit payment</p>
            </div>
        </div>
    )
}}
