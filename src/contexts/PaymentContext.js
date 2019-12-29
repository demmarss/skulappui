import React, {createContext, useState, useEffect} from 'react'
import {getPayments, createPayment} from '../components/service/api'
import { useSelector} from 'react-redux'

export const PaymentContext = createContext();

export default function PaymentContextProvider (props) {

    const [ payments, setPayment ] = useState([])

    const authedUser = useSelector(({authedUser})=>{
        return authedUser
      })

    useEffect(() => {
        if (authedUser){
        getPayments().then((result)=>
        setPayment(result)
        );
        }
    }, [payments]);
    
    
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
