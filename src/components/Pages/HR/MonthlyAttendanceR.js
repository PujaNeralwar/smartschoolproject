import React from 'react'
import '../HR/Hrstyle.css';
import { useState } from 'react';
const MonthlyAttendanceR = () => {

const [getatt,setGetAtt] = useState(false);

const toggleDiv = () => {
  setGetAtt(!getatt);
};


  const GetAttendance =() => {
    return (
      <>

  
<div className='twodiv'> 
<div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
<div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
</div>

<table style={{margin:"10px"}}>
<tr>
<th>SR No</th>
<th>Staff Name</th>
<th>Staff Code</th>
<th>Biometric Code</th>
<th>Designation</th>
<th>Staff Department</th>
<th>Status</th>
<th>Joining Date</th>
<th>Total Days</th>
<th>Working Days</th>
<th>Paid Days</th>
<th style={{color:'green'}}>Present Days</th>
<th style={{color:'blue'}}>Absent Days</th>
<th style={{color:'violet'}}>WeekOffs</th>
<th style={{color:'darkred'}}>Holidays</th>
<th style={{color:'orange'}}>Leaves</th>


</tr>
<tr>
<td colSpan={16}></td>

  
</tr>

</table>

      </>
    )

  } 




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
                
             <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px"}} onClick={toggleDiv}>Get Attendance</button>
             
          </div>
          {getatt && <GetAttendance/>}

            

        </div>

    </>
  )
}

export default MonthlyAttendanceR;