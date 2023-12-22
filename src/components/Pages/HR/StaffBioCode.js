import React from 'react'

const StaffBioCode = () => {
  return (
    <>
    <div className="SDheading"><span>HR </span><label> / Biometric Attendance / Staff Biometric Code</label> </div>

<div className='top3'>
<label>Staff Biometric Codes
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
     <label> Staff Department </label>
     <select style={{width:"200px"}}><option>- All -</option>
     <option>Teaching</option>
     <option>Non-Teaching</option>
     <option>Transport</option>
     <option>Administration</option></select>
     </div>

     

    <div>
     <label>Staff Type</label>
     <select style={{width:"200px"}}><option>--Active --</option><option>InActive</option></select>
    </div>
     
        
     <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px" ,width:"100px"}}>Get</button>
     
  </div>
  
</div>

    </>
  )
}

export default StaffBioCode;