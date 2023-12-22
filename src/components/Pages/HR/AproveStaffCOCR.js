import React from 'react'

const AproveStaffCOCR = () => {
  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Leaves / Approve Staff Compensatory Off Credit Requests</label> </div>

<div className='top3'>
<label>Update Staff Monthly Leaves
<button style={{border:"none", fontWeight:"600"}}>How it Work ?</button>
</label>


</div>

<div  className="SDashboard">

<div className='top2'>
<label style={{fontSize:"12px",color:"#474847"}}><sapn style={{color:"black"}}>Note : </sapn>
We are showing Academic months based on HR Payroll Academic Year, if Payroll Academic year not defined working on current academic year
</label>    
 </div>

  <div className='DailyAt'>
     <div>
     <label>Select  Branch </label>
     <select><option>Ethiken Educational Society</option></select>
     </div>

     <div>
     <label> Leave Category </label>
     <select style={{width:"150px"}}><option>- All -</option></select>
    </div> 
     
     <div>
     <label> Staff Department </label>
     <select style={{width:"150px"}}><option>- All -</option>
     <option>Teaching</option>
     <option>Non-Teaching</option>
     <option>Transport</option>
     <option>Administration</option></select>
     </div>

     <div>
     <label> Leave Category </label>
     <select style={{width:"150px"}}><option>Casual</option> <option>Medicle</option></select>
    </div> 


    <div>
     <label> Based on Joinig Date </label>
     <select style={{width:"200px"}}><option>Joined Last 30 Days</option> <option>Joined Last 15 Days</option></select>
    </div> 


    
        
     <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px" ,width:"60px"}}>Get</button>
     
  </div>
  
</div>
    </>
  )
}

export default AproveStaffCOCR;