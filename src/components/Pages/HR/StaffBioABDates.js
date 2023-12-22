import React from 'react'

const StaffBioABDates = () => {
  return (
<>
<div className="SDheading"><span>HR </span><label> / Biometric Attendance / Staff Bio-Metric Attendance Between Dates</label> </div>

<div className='top3'>
<label>Staff Bio-Metric Attendance Between Dates
<button style={{border:"none", fontWeight:"600"}}>How it Work ?</button>
</label>


</div>

<div  className="SDashboard">
 <div className='top2'>
<label style={{fontSize:"12px",color:"#474847"}}><sapn style={{color:"black"}}>Note : </sapn>Only Biometric Activated Branches will be shown
</label>    
 </div>


  <div className='DailyAt'>
     <div>
     <label>Select  Branch </label>
     <select><option>Ethiken Educational Society</option></select>
     </div>

     <div>
     <label> Select Date</label>
     <label><input type='date'></input>To<input type='date'></input></label>
    </div> 

     <div>
     <label> Staff Department </label>
     <select style={{width:"200px"}}><option>- All -</option>
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

export default StaffBioABDates;