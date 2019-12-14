import React from 'react'
import SearchBar from '../searchBar';
import SuccessMessage from '../successMessage';
import FailureMessage from '../failureMessage';
import {apiUrlForImages} from '../../service/api'
import QRCode from 'qrcode.react'
import umalogotrans from '../../images/umalogotrans.jpg'
import BackButton from '../backButton';

export default function IdCard ({setStatus, searchUser, user}){

    return(
        <div>
            <br/>
                <h1 className="title">ID Card</h1>    
            <br/>
        
        <div className="columns">
            <div className="column is-4">
                <BackButton setStatus = {setStatus} />
                <br/>
                <br/>
                <SearchBar Search={searchUser} PlaceHolder = "Enter parent/student/staff code" Status="idCard"/>
                <br/>
                <br/>
                {user!==null? <SuccessMessage/>: null}
                {user==null? <FailureMessage/>: null}
                <br/>
                <br/>
                <p className="button is-danger" onClick={() => window.print()}>Print</p>
            
            </div>
            <div className="column is-4">
                <br/>
                {user!==null? <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={apiUrlForImages+"/uploadsLMS/"+user.pic} alt="Question"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                        <div className="media-left">
                            <figure className="image is-96x96">
                                <img src={apiUrlForImages+"/uploadsLMS/"+user.pic} alt="Question"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-2">{user.firstname}</p>
                            <p className="title is-2">{user.lastname}</p>
                            <p className="title is-4">{user.grade}</p>
                        </div>
                        </div>

                        {/* <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div> */}
                    </div>
                </div>: null}

            </div>

            <div className="column is-4">
                <br/>
                
                <div className="card">
                    <div className="card-image">

                        <QRCode 
                        size={215}
                        value={user.code} />,
                        
                    </div>
                    <div className="card-content">
                        <div className="media">
                        <div className="media-content">
                            <p className="title is-2">UMA</p>
                            <p className="subtitle is-6">Universal Muslim Academy</p>
                            <p className="subtitle is-6">Please contact us if the card is missing</p>
                            <p className="subtitle is-6">Tel no: </p>
                            <p className="subtitle is-6">Email: </p>
                        </div>
                        <div className="media-right">
                            <figure className="image is-96x96">
                                <img src={umalogotrans} alt="Placeholder"/>
                            </figure>
                        </div>
                        
                        </div>

                        {/* <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}