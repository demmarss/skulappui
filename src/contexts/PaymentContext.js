import React, {createContext, useState, useEffect} from 'react'
import {getPayments, createPayment} from '../components/service/api'

export const PaymentContext = createContext();

export default function PaymentContextProvider (props) {

    const [ payments, setPayment ] = useState([])

    function getingPayments(){
        getPayments().then((result)=> setPayment(result))
    }
    
    
    function creatingPayment (userId) {
        createPayment(userId).then((result)=>{
           if( result !== ''){
            const updatedPayment = payments.filter(x=> x._id !== result._id)

            setPayment([...updatedPayment, result])
            return(result)
           }else{
            alert('Payment not success')
           }            
        }
        )   
    }

return(
            <PaymentContext.Provider value ={{payments, creatingPayment, getingPayments}}>
                {props.children}
            </PaymentContext.Provider>
    )

}
