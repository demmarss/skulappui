import React from 'react'

export default function Link({user = {}, GetUserDetail}) {

    return (
        <div className="column is-2">
            <div className='box is-info' onClick={()=> GetUserDetail(user._id)}>
                <h1 className="title is-5 has-text-black">
                    {user.name} </h1>
            </div>
        </div>
    )
}
