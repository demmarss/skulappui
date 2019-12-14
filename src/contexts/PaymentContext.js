import React, {createContext, useState, useEffect} from 'react'
import {getPayments, createPayment} from '../api'

export const PaymentContext = createContext();

export default function PaymentContextProvider (props) {

    const [ payments, setPayment ] = useState([])

    useEffect(() => {
        getPayments().then((result)=>
        setPayment(result)
        );
    }, []);
    
    
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
            <PaymentContext.Provider value ={{payments, creatingPayment}}>
                {props.children}
            </PaymentContext.Provider>
    )

}
