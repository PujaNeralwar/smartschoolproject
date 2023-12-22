import React from 'react'

const StaffHolidays = () => {
  return (
    <>
    <div className="SDheading"><span>HR </span><label> / Staff Leaves / Staff Holidays</label> </div>

<div className='top3'>
<label>Staff Holidays
<button style={{border:"none", fontWeight:"600"}}>How it Work ?</button>
</label>


</div>

<div  className="SDashboard">

  <div className='DailyAt'>
     <div>
     <label>Select  Branch </label>
     <select><option>Ethiken Educational Society</option></select>
     </div>

     <div>
     <label> Date</label>
     <label><input type='date'></input>T</label>
    </div> 
     
     <div>
     <label> Type</label>
     <select style={{width:"250px"}}>
     <option>All Holidays</option>
     <option>Branch Wise Holidays</option>
     </select>

     </div>

     
    
        
     <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px" ,width:"200px"}}>Add New Holidays</button>
     
  </div>
  
</div>

    </>
  )
}

export default StaffHolidays;