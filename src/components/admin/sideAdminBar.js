import React from 'react'
// import {useHistory} from 'react-router-dom'


export default function SideAdminBar({SetDisplay}){

    // const history = useHistory();

    // function handleBackHome(){
    //     history.push('/')
    // }


    return(
        <div className='columns is-multiline has-background-dark'>
            <h1 className="title ">Side bar</h1>
            <div className='column is-12'>
                            <div className='button is-large is-fullwidth' onClick={
                                () => SetDisplay('/')
                        }>
                                Admin
                            </div>
                        </div>
                        <div className='column is-12'>
                            <div className='button is-large is-fullwidth' onClick={
                                () => SetDisplay('setUp')
                        }>
                                Set Up
                            </div>
                        </div>
                        <div className='column is-12'>
                            <div className='button is-large is-fullwidth' onClick={
                                () => SetDisplay('profile')
                        }>
                                Profile
                            </div>
                        </div>
                        <div className='column is-12'>
                            <div className='button is-large is-fullwidth' onClick={
                                () => SetDisplay('record')
                        }>
                                Records....

                            </div>
                        </div>
                        {/* <div className='column is-12'>
                            <div className='button is-large is-fullwidth' onClick={
                                () => SetDisplay('analysis')
                        }>
                                Analysis....
                            </div>
                        </div> */}
                        <div className='column is-12'>
                            <div className='button is-large is-fullwidth' onClick={
                                () => SetDisplay('finance')
                        }>
                                Finance
                            </div>
                        </div>
                        {/* <div className='column is-12'>
                            <div className='button is-large is-fullwidth' onClick={
                                () => SetDisplay('academics')
                        }>
                                Academics....
                            </div>
                        </div>
                        <div className='column is-12'>
                            <div className='button is-large is-fullwidth'>
                                Coming Soon......
                            </div>
                        </div> */}

                    </div>
    )
}