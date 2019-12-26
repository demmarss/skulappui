import React from 'react'

export default function MyRecord({UserRecords, User}) {

    function getDate(time){
       if (time === '') {
           return('Blank')
        }else {
            let timeIn = new Date(time)
            return (timeIn.getMonth()+1 +'/'+timeIn.getDate()+'/'+timeIn.getFullYear())
        }
     }
 
     function getTime(time){
        if (time === '') {
            return('Blank')
         }else {
            let timeHere = new Date(time)
            return(timeHere.getHours() + ':' + timeHere.getMinutes())
         }
        
     }

     function getTimeHourlyDiff(timeIn, timeOut){
        if (timeIn === '' || timeOut === '' ) {
            return('Blank')
         }else {
            let hourDiff = parseInt((new Date(timeOut).getTime() - new Date(timeIn).getTime())/3600000)
            return (hourDiff + ' hours')
         }
        
        
     }

    return (
        <div>
            <section className="section">
                <div className="container">
                    <h1 className="title is-1 has-text-black">{User.name} Record </h1>
                    <div className="columns">
                        <div className="column is-6 is-offset-3">
                            <table className="table is-striped">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Time In</th>
                                        <th>Time Out</th>
                                        <th>Hour spent</th>
                                    </tr>
                                </thead>
                                <tbody>{UserRecords.map(record =><tr key={record._id}>
                                        <th>{getDate(record.timeIn)}</th>
                                        <th>{getTime(record.timeIn)}</th>
                                        <th>{getTime(record.timeOut)}</th>
                                        <th>{getTimeHourlyDiff(record.timeIn, record.timeOut)}</th></tr>)} 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

  // const date = new Date(recordhere[0].timeIn)
        // // const date = new Date()

        // console.log("Date", date.getDate())
        // console.log ("Months", date.getMonth() + 1)
        // console.log("Year", date.getFullYear())
        // console.log("Hour", date.getHours())
        // console.log("Minute", date.getMinutes())
