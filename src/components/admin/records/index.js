import React, {useState, useContext} from 'react'
import MyRecord from './record'
import Link from '../link'
import {UserContext} from '../../../contexts/UserContext'
import {RecordContext} from '../../../contexts/RecordContext'

export default function Record() {

    const {users} = useContext(UserContext)
    const {records} = useContext(RecordContext)

    const [userRecords, setUserRecords] = useState([])
    const [user, setUser] = useState('')

    function getUserDetail(userId) { // filter with userId
        let user = users.filter(user => user._id === userId)
        let recordhere = records.filter(record => record.userId === userId)
        setUserRecords(recordhere)
        setUser(user[0])
    }

    return (
        <div>
            <article className="message is-primary">
                <div className="message-header">
                    <p>Records</p>
                    <button aria-label="delete" className="delete"></button>
                </div>
                <div className="message-body">
                    <section className="section">
                        <div className="container">

                            <div className="columns">
                                {
                                users.map(user => <Link user={user}
                                    key={
                                        user._id
                                    }
                                    GetUserDetail={getUserDetail}/>)
                            } </div>

                        </div>
                    </section>
                    {
                    userRecords.length > 0 ? <MyRecord UserRecords={userRecords}
                        User={user}/> : null
                } </div>
            </article>
        </div>
    )
}
