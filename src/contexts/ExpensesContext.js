import React, {createContext, useState} from 'react'
import {getExpenses, createExpenses} from '../components/service/api'
import { useSelector} from 'react-redux'

export const ExpensesContext = createContext();


export default function ExpensesContextProvider (props) {

    const [ expenses, setExpenses ] = useState([])

    function getingExpenses(){
        getExpenses().then((result)=> setExpenses(result))
                
 }
 

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
            <ExpensesContext.Provider value ={{expenses, creatingExpenses, getingExpenses}}>
                {props.children}
            </ExpensesContext.Provider>
    )

}
