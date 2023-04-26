import React from 'react'

const ResultTable = () => {
  return (
    <div>
      <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
               
                  
                        <tr className='table-body' >
                            <td>Ajmal</td>
                            <td>05</td>
                            <td>15</td>
                            <td>Failed</td>
                        </tr>
                  
                
                
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable
