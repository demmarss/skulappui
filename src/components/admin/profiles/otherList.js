import React from 'react'
import MyProfile from './profile'

export default function OtherList ({OtherList}){
    return(
        <div>
            <div className='columns'>
                        <div className='column is-4'>
                        {
                        OtherList.map(x =>
                            
                                <p className='button is-round is-fullwidth'>
                                    {x} 
                                </p>
                        )
                    } 
                        </div>
                        <div className='column is-8'>
                           Individual profile 
                           <MyProfile/>
                        </div>
                    </div>
        </div>
    )
}