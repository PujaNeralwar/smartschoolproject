import React from 'react';
import "../HR/Hrstyle.css";

const DailyAttendanceReport = () => {
  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Attendance / Daily Attendance Report </label> </div>


        <div  className="SDashboard">
         <div className='daTop'>
            <div className='dailyButton'>
                <button>Dashboard</button>
                <button>Present</button>
                <button>Leave</button>
                <button>Weak Off</button>
                <button>Absent</button>
                <button>Time Table Substitution</button>
            
              <select style={{marginLeft:"400px",marginRight:"20px",backgroundColor:"#d9dbde"}}><option>Ethiken Educational Society</option></select>
              <input type='date'></input>
              
            </div>  
         </div>
        

         <div className='atdiv'> 
        

       <label> <i class="fa-solid fa-cloud-sun fa-beat-fade" style={{color: "#ffd22e",}}></i> Morning Session </label>
       <label> <i class="fa-solid fa-cloud-moon fa-beat-fade" style={{color:"#ffd22e",}}></i> Evening Session </label>
       </div>
       <div className='labeldiv'>
        <label>No Data Found</label>
       </div>

        

        </div>

    </>
  )
}

export default DailyAttendanceReport;