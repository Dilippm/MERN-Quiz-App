import React from 'react'
import Questions from './Questions'


/** redux store import */
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Quiz = () => {
   /** next button event handler */
   function onNext(){
   console.log("next button clciked");
 
   
}

/** Prev button event handler */
function onPrev(){
    console.log("prev button clciked");
}

  return (
    <div className='container'>
    <h1 className='title text-light'>Quiz Application</h1>

    {/* display questions */}
    <Questions  />
   

    <div className='grid'>
         <button className='btn prev'onClick={onPrev} >Prev</button> : <div></div>
        <button className='btn next' onClick={onNext} >Next</button>
    </div>
</div>
  )
}

export default Quiz
