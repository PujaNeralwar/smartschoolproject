import React from 'react'

const GiveDailyAttendance = () => {
  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Attendance / Give Daily Attendance </label> </div>

        <div  className="SDashboard">
         <div className='top2'>
            <label>Staff  Attendance</label>
            <div className='staffbut'>
              
              <button style={{border:"none", color:"blue", marginLeft:"100px"}}> <i class="fa-regular fa-images fa-lg" style={{fontWeight:"600",color: "#031fab", paddingRight:"10px"}}></i> Report</button>
            </div>  
         </div>
        

          <div className='DailyAt'>
             <div>
             <label> Branch </label>
             <select><option>Ethiken Educational Society</option></select>
             </div>

             <div>
             <label> Payroll Entity </label>
             <select><option>All</option><option>Ethiken Educational Society</option></select>
             </div>

             <div>
             <label> Staff Department </label>
             <select><option>- All -</option>
             <option>Teaching</option>
             <option>Non-Teaching</option>
             <option>Transport</option>
             <option>Administration</option></select>
             </div>

             <div>
             <label> Attendance Date </label>
             <input type='date'></input>
             </div>

             <div>
             <label> Type </label>
             <select><option>Regular View</option> <option>Grid View</option></select>
             </div>

          </div>

          <button style={{backgroundColor:"blue",color:"#fff", margin:"30px"}}>Get Staff</button>

        

        </div>

    </>
  )
}

export default GiveDailyAttendance;