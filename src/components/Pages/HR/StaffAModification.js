import React from 'react'

const StaffAModification = () => {
  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Biometric Attendance / Staff Attendance Modification </label> </div>

        <div className='top3'>
        <label>Staff Attendance Modification
        <button style={{border:"none", fontWeight:"600"}}>How it Work ?</button>
        </label>
        <div>
          <button style={{color:"blue", border:"1px solid blue",fontSize:"12px",marginRight:"10px"}}>Modified Attendance Report</button>
          <button style={{color:"blue", border:"1px solid blue",fontSize:"12px",marginRight:"10px"}}>Staff Leave on Today</button>
        </div>


</div>

<div  className="SDashboard">
         <div className='top2'>
            <label style={{fontSize:"15px",color:"#474847"}}><sapn style={{color:"black"}}>Note : </sapn>Only Biometric & RFID Activated Branches will be shown</label>
             
         </div>
        

          <div className='DailyAt'>
             <div>
             <label> Branch </label>
             <select><option>Ethiken Educational Society</option></select>
             </div>

             <div>
             <label> Date</label>
             <input type="date" style={{width:"250px"}}></input>
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
                <label>Type</label>
                <select><option>Based on Timing</option><option>Based on Working Hours</option></select>
             </div>
            
                
             <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px"}}>Search</button>
             
          </div>

        

        

        </div>

    </>
  )
}

export default StaffAModification;