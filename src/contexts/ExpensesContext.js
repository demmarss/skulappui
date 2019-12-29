import React, {createContext, useState, useEffect} from 'react'
import {getExpenses, createExpenses} from '../components/service/api'
import { useSelector} from 'react-redux'

export const ExpensesContext = createContext();


export default function ExpensesContextProvider (props) {

    const [ expenses, setExpenses ] = useState([])

    const authedUser = useSelector(({authedUser})=>{
        return authedUser
      })

    useEffect(() => {
        if (authedUser){
            getExpenses().then((result)=>
            setExpenses(result)
            );           
        }
    }, [expenses]);
    
    
    function creatingExpenses (expenseHere) {
        createExpenses(expenseHere).then((result)=>{
           if( result !== ''){
            const updatedExpenses = expenses.filter(x=> x._id !== result._id)
            setExpenses([...updatedExpenses, result])
           }else{
            alert('Expenses not success')
           }            
        }
        )   
    }

return(
            <ExpensesContext.Provider value ={{expenses, creatingExpenses}}>
                {props.children}
            </ExpensesContext.Provider>
    )

}
