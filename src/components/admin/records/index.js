import React from 'react'
// import {UserContext} from '../../../contexts/UserContext'
// import {RecordContext} from '../../../contexts/RecordContext'

export default function Record() {

    // const {users} = useContext(UserContext)
    // const {records} = useContext(RecordContext)

    // const [userRecords, setUserRecords] = useState([])
    // const [user, setUser] = useState('')

    // function getUserDetail(userId) { // filter with userId
    //     let user = users.filter(user => user._id === userId)
    //     let recordhere = records.filter(record => record.userId === userId)
    //     setUserRecords(recordhere)
    //     setUser(user[0])
    // }

    return (
        <div>
            <article className="message">

                <p className='title'>Records</p>

                <div className="message-body"></div>
            </article>
        </div>
    )
}
