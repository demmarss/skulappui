import React, {useState} from 'react'
import JoinLcycle from './joinLcycle';
import CreateLcycle from './createLcycle';
import LearnMore from './learnMore';
// import JoiningMessage from './joiningMessage';


export default function Lcycle() {

    const [showCreateLC, toggleShowCreateLC] = useState(false);
    const [showJoinLC, toggleShowJoinLC] = useState(false);
    const [showLearnMore, toggleShowLearnMore] = useState(false);
        

    function handletoggleShowCreateLC(){
        toggleShowCreateLC(!showCreateLC)
        toggleShowJoinLC(false)
        toggleShowLearnMore(false)
    }

    function handleJoinLC(){
        toggleShowCreateLC(false)
        toggleShowJoinLC(!showJoinLC)
        toggleShowLearnMore(false)
    }

    function handleLearnMore(){
        toggleShowCreateLC(false)
        toggleShowJoinLC(false)
        toggleShowLearnMore(!showLearnMore)
    }
    
    return (
<div className="columns is-mobile is-centered">
        <div className="column is-half">
        <section className="hero is-medium is-primary is-bold">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
      Learning Cycle App
      </h1>
      <h2 className="subtitle">
      Here you can create a new learning cycle for your students 
      </h2>
      <p className='button' onClick={handleLearnMore}>Learn more</p>
            
                <p className='button' onClick={handletoggleShowCreateLC}>Create a new learning cycle</p>

                <p className='button' onClick={handleJoinLC}>Join learning cycle</p>
                
                {showJoinLC ? <JoinLcycle/>: null }
                {showCreateLC ? <CreateLcycle/>: null} 
                { showLearnMore? <LearnMore/>:null }
    </div>

  </div>
</section>
                            
                
            
            </div>
            </div>
        
        


    )
}
