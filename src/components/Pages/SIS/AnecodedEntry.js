import React from 'react'

const AnecodedEntry = () => {
  return (
   <>
   <div className="SDheading"><span>SIS </span><label> / Enrollement / Anecdotes Entry </label> </div>
    <div className='std-prf-top3'>
    <h3 className='std-prof-h3'>Manage Anecdotes</h3>      
       </div>

       <div  className="SDashboard">
        <button className='ancedotes-button'>Create Anecdotes</button> <br/>

        <table>
            <tr>
                <th>Sr.No</th>
                <th>Anedotes Name</th>
                <th>Type</th>
                <th>Max no of Badget</th>
                <th>Image</th>
                <th>Update in Student Profile</th>
                <th>Enable Email Notification to parent</th>
                <th>Action</th>
            </tr>

            
            <tr>
                <td colSpan={8} className='ancedentots-td'>No Records To Display!!</td>
               
            </tr>
        </table>

       </div>
       
       
       </>
  )
}

export default AnecodedEntry;