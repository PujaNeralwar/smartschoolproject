import React from 'react'

const PayrollBioAttendanceR = () => {
  return (
    <>
<div className="SDheading"><span>HR </span><label> / Biometric Attendance / Payroll Biometric Attendance Report</label> </div>

<div className='top3'>
<label>Payroll Biometric Attendance Report
<button style={{border:"none", fontWeight:"600"}}>How it Work ?</button>
</label>


</div>

<div  className="SDashboard">
 <div className='top2'>
<label style={{fontSize:"12px",color:"#474847"}}><sapn style={{color:"black"}}>Note : </sapn>Only Biometric & RFID Activated Branches will be shown
<br></br>
<sapn style={{color:"black"}}>Rules : </sapn>WeekOffs LOP Rule Applicable : <span>No</span> <i class="fa-solid fa-circle-question" style={{color: "#0541a8"}}></i>,
HoliDay LOP Rule Applicable : <span>No</span> <i class="fa-solid fa-circle-question" style={{color: "#0541a8"}}></i> ,   Permittable Lates : <span>0</span>,   No of Biometric lates for LOP (A) : <span>0 </span>,   LOPDays For Biometric Lates (B) : <span>0.00 </span></label>    
 </div>


  <div className='DailyAt'>
     <div>
     <label>Select  Branch </label>
     <select><option>Ethiken Educational Society</option></select>
     </div>

     <div>
     <label> Payroll Month</label>
     <select style={{width:"250px"}}><option>-- Select ---</option><option>Last 30 Days</option></select>
    </div> 
     2
     <div>
     <label> Staff Department </label>
     <select style={{width:"250px"}}><option>- All -</option>
     <option>Teaching</option>
     <option>Non-Teaching</option>
     <option>Transport</option>
     <option>Administration</option></select>
     </div>

     
    
        
     <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px" ,width:"100px"}}>Get</button>
     
  </div>
  
</div>


    </>
  )
}

export default PayrollBioAttendanceR;