import React, {useContext, useEffect} from 'react'
import {ExpensesContext} from '../../../contexts/ExpensesContext'

export default function Expenses() {

    const {expenses} = useContext(ExpensesContext)
    
    function getDate(value) {
        const dateF = new Date()
        const year = dateF.getFullYear(value)
        const month = dateF.getMonth(value) + 1
        const date = dateF.getDate(value)
        return(month + '/' + date + '/' + year)
    }

    return (
        <div>
            Expenses History
            <div className="card-table">
                <div className="content">
                    <table className="table is-fullwidth is-striped">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Description</th>
                                <th className="level-right">Link</th>
                            </tr>
                        </thead>
                        <tbody>{expenses.map(x =><tr key={x.date}>
                                <td>{getDate(x.date)}</td>
                                <td>${x.amount}</td>
                                <td>{x.description}</td>
                                <td className="level-right">
                                    <p className="button is-primary">Document</p>
                                </td></tr>)}
                        </tbody>
                    </table>
                </div>


            </div>

        </div>


    )
}
