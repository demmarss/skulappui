import React, {createContext, useState, useEffect} from 'react'
import {getExpenses, createExpenses} from '../api'

export const ExpensesContext = createContext();

export default function ExpensesContextProvider (props) {

    const [ expenses, setExpenses ] = useState([])

    useEffect(() => {
        getExpenses().then((result)=>
        setExpenses(result)
        );
    }, []);
    
    
    function creatingExpenses (expenseHere) {
        console.log('........', expenseHere)
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
