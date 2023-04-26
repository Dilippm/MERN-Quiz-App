import React from 'react'
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';
import  '../styles/Result.css'
const Result = () => {
  function onRestart(){
    console.log("restart");
}

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'>Hello</span>
            </div>
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>0</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>10</span>
            </div>
            <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>03</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'>04</span>
            </div>
            <div className='flex'>
                <span>Quiz Result</span>
                <span className='bold'>Failed</span>
               
            </div>
        </div>

        <div className="start">
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>
        <div className="container">
            {/* result table */}
            <ResultTable></ResultTable>
        </div>

       
    </div>
  )
}

export default Result
