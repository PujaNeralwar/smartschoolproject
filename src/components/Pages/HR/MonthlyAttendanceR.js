import React from 'react'
import '../HR/Hrstyle.css';
const MonthlyAttendanceR = () => {
  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Attendance / Monthly Attendance Report </label> </div>

<div className='top3'>
<label>Staff Attendance Monthly Report
<button style={{border:"none", fontWeight:"600"}}>How it Work ?</button>

</label>

</div>

<div  className="SDashboard">
         <div className='top2'>
            <label style={{fontSize:"15px",color:"#474847"}}><sapn style={{color:"black"}}>Note : </sapn>Based on payroll month.If using Boimetric,after applying rule the effective attendace status shown</label>
             
         </div>
        

          <div className='DailyAt'>
             <div>
             <label> Branch </label>
             <select><option>Ethiken Educational Society</option></select>
             </div>

             <div>
             <label> Staff Department </label>
             <select style={{width:"250px"}}><option>- All -</option>
             <option>Teaching</option>
             <option>Non-Teaching</option>
             <option>Transport</option>
             <option>Administration</option></select>
             </div>

             <div>
             <label> Payroll Month</label>
             <input type="date" style={{width:"250px"}}></input>
             </div>
                
             <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px"}}>Get Attendance</button>
             
          </div>

        

        

        </div>

    </>
  )
}

export default MonthlyAttendanceR;