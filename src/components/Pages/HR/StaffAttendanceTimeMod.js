import React from 'react'

const StaffAttendanceTimeMod = () => {
  return (
    <>
      <div className="SDheading"><span>HR </span><label> / Staff Attendance / Staff Attendance Timing Modification </label> </div>

<div className='top3'>
<label>Staff Attendance Late / Early Modifications
<button style={{border:"none", fontWeight:"600"}}>How it Work ?</button>

</label>

</div>

<div  className="SDashboard">
         <div className='top2'>
            <label style={{fontSize:"15px"}}>Note : Only Biometric  and RFID Activated Branches are shown</label>
             
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
                
             <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px"}}>Get Staff</button>
             
          </div>

        

        

        </div>



    </>
  )
}

export default StaffAttendanceTimeMod;
