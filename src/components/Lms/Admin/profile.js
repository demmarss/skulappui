import React from 'react'
import SearchBar from '../searchBar';
import SuccessMessage from '../successMessage';
import FailureMessage from '../failureMessage';
import {apiUrlForImages} from '../../service/api'
import BackButton from '../backButton';

export default function RegisterProfile ({setStatus, searchUser, user}){

    function handleGetIdCard(codehere){
        console.log("Clickeedddd")
        searchUser(codehere)
        setStatus("idCard")
    }
    
    return(
        
        <div>
            <br/>
                <h1 className="title">Registered Profile</h1>    
            <br/>          
            
            <div className="columns">
                <div className="column is-4">
                    <BackButton setStatus = {setStatus} />
                    <br/>
                    <br/>
                    <SearchBar Search={searchUser} PlaceHolder = "Enter parent/student/staff code" Status="registerProfile"/>
                    <br/>
                    <br/>
                                
                </div>
                <div className="column is-7">
                    <br/>
                    {user==null? <FailureMessage/>:
                        <div>
                             <SuccessMessage/>
                             <article className="media">
                                <figure className="media-left">
                                    <p className="image is-128x128">
                                    <img src={apiUrlForImages+"/uploadsLMS/"+user.pic} alt="Question"/>
                                    </p>
                                </figure>
                                <div className="media-content">
                                    <div className="content">

                                        <p><strong>{user.firstname + " " + user.lastname}</strong> </p>
                                        
                                        <p> Role: <small>{user.role}</small> </p>
                                        
                                        <p> Code: <small>{user.code}</small></p>
                    
                                        {user.role == 'student'? <p>Parent Code: <small>{user.parentCode}</small></p>: null}
                                        
                                        <p> Some message here</p>
                                    
                                    </div>
                                    <nav className="level is-mobile">
                                    <div className="level-left">
                                        <p className="button level-item">
                                        Delete
                                        </p>
                                        <p className="button level-item">
                                        Edit
                                        </p>
                                        <p className="button level-item" onClick={()=>handleGetIdCard(user.code)}>
                                        Print Id-Card
                                        </p>
                                    </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    }
                </div>            
            </div>
        </div>
    )
}