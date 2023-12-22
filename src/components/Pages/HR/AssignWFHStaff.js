import React from 'react'

const AssignWFHStaff = () => {
  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Attendance / Assign Work From Home To Staff </label> </div>

<div className='top3'>
<label>Assign Work From Home To Staff


</label>

</div>

<div  className="SDashboard">
         
        

          <div className='DailyAt'>
             <div>
             <label> Branch </label>
             <select><option>Ethiken Educational Society</option></select>
             </div>

             <div>
             <label> Date Type</label>
             <select style={{width:"250px"}}>
             <option>Todays</option>
             <option>Next 7 Days</option>
             <option>Next 14 Days</option>
             <option>Last 7 Days</option>
             <option>Last 14 Days</option>
             </select>
             </div>

             <div>
             <label> Staff Department </label>
             <select style={{width:"250px"}}><option>- All -</option>
             <option>Teaching</option>
             <option>Non-Teaching</option>
             <option>Transport</option>
             <option>Administration</option></select>
             </div>

            
                
             <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px"}}>Get Details</button>
             
          </div>

        

        

        </div>
    </>
  )
}

export default AssignWFHStaff;