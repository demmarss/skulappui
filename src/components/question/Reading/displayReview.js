import React from 'react'

function ReviewDisplay({questions, answered, Status}){

    function handleTryAgain(){
        Status('start', questions, [])
    }

    return (
        <div>
            <div>
                <h1 class='title'>Review</h1>

                <table className='table is-bordered is-striped is-narrow'>
                    <thead>
                        <tr>
                            <th> No </th>
                            <th> Question </th>
                            <th> Correct answer </th>
                            <th> Your answer </th>
                            <th> Remark </th>
                        </tr>
                    </thead>
                    <tbody>
                    {answered.map(x => 
                        <tr key={answered.indexOf(x)}>
                            <th>{answered.indexOf(x) + 1}</th>
                            <th>{x.number1} + {x.number2} </th>
                            <th>{x.answer} </th>
                            <th> {x.typedAnswer} </th>
                            <th> {x.remark} </th>
                        </tr>
                    )}
                    </tbody>

                </table>
            </div>
            <p className="button is-warning" onClick={handleTryAgain}>Try Again</p>
        </div>
    )
}

export default ReviewDisplay
