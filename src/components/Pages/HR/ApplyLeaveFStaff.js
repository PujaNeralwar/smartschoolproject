import React from 'react'

const ApplyLeaveFStaff = () => {
  return (
    <>
              <div className="SDheading"><span>HR </span><label> / Staff Leaves / Apply Leaves for Staff</label> </div>

<div className='top3'>
<label>Apply Leaves For Staff

</label>
<div className='top3buttondiv'>
  <button>Todays Staff Leave Details</button>
  <button>StaffHolidays & ShiftDetails</button>
</div>


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
     <label> Staff Department </label>
     <select style={{width:"150px"}}><option>- All -</option>
     <option>Teaching</option>
     <option>Non-Teaching</option>
     <option>Transport</option>
     <option>Administration</option></select>
     </div>

     <div>
     <label> Select Type </label>
     <select style={{width:"150px"}}><option>- Active -</option><option>InActive</option></select>
    </div> 
     
     

     <div>
     <label> Select Staff By</label>
     <select style={{width:"150px"}}><option>Staff Name</option> <option>Staff Branch Code</option>
     <option>Biometric Code</option><option>ERP Staff Code</option></select>
    </div> 


    <div>
     <label> Enter Code</label>
     <input type='text' placeholder="Enter Staff Name"></input>
    </div> 


    
        
     <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px" ,width:"60px"}}>Search</button>
     
  </div>
  
</div>
    </>
  )
}

export default ApplyLeaveFStaff;