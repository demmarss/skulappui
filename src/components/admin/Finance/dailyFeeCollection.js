import React, { useState, useContext, useEffect } from 'react'
import { PaymentContext } from '../../../contexts/PaymentContext'


export default function DailyFeeCollection (){
    const {payments} = useContext(PaymentContext)

    const [monthlyPayment, setMonthlyPayment] = useState(0)


    useEffect(() => {
        const dating = new Date()
        const allPaymentThisMonth = payments.filter(payment => dating.getMonth(payment.paymentDate) === dating.getMonth(new Date()))
        const allPaymentThisYearOfSameMonth = allPaymentThisMonth.filter(payment => dating.getFullYear(payment.paymentDate) === dating.getFullYear(new Date()))
        let sumPayment = 0
        allPaymentThisYearOfSameMonth.forEach(x =>

            sumPayment += Number(x.amount) 
        )
        setMonthlyPayment(sumPayment)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [payments]);



//     const month1 = ['January', 'February', 'March', 'April']
// const month2 = ['May', 'June', 'July', 'August']
// const month3 = ['September', 'October', 'November', 'December']
// const allMonths = [
//     ...month1,
//     ...month2,
//     ...month3
// ]


    return(
        <div>
           <h1 className='title'>Money collected this month</h1>
           
           <h1 className='title'> ${monthlyPayment} </h1>
        </div>
    )
}