import React, {createContext, useState} from 'react'
import {getPayments, createPayment, editPayment} from '../components/service/api'


export const PaymentContext = createContext();

export default function PaymentContextProvider (props) {

    const [ payments, setPayment ] = useState([])

    function getingPayments(){
        getPayments().then((result)=> setPayment(result))
    }
    
    
    function creatingPayment (payment) {
        createPayment(payment).then((result)=>{
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


    function editingPayment(payment){
        editPayment(payment).then((result)=>{
            if( result !== ''){
                const updatedPayment = payments.filter(x=> x._id !== result._id)
    
                setPayment([...updatedPayment, result])
                return(result)
               }else{
                alert('Payment not success')
               } 
        })
    }

return(
            <PaymentContext.Provider value ={{payments, creatingPayment, getingPayments, editingPayment}}>
                {props.children}
            </PaymentContext.Provider>
    )

}
