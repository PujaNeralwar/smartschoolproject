import React, { useState } from 'react';
import "../HR/Hrstyle.css";


const DailyAttendanceReport = () => {

  const [attdash,setAttdash] =useState(true);
  const [active, setActive] = useState("");
  const [attstaff,setAttStaff] = useState("");
  const handleOnClick=(e) =>{
    setAttStaff(e);
  }
  const handleClick = (e) => {
    setActive(e.target.id);   
  }


 
const Attendancedash = () => {
  return(
    <>
    <div className='atdiv'> 
        

        <label> <i class="fa-solid fa-cloud-sun fa-beat-fade" style={{color: "#ffd22e",}}></i> Morning Session </label>
        <label> <i class="fa-solid fa-cloud-moon fa-beat-fade" style={{color:"#ffd22e",}}></i> Evening Session </label>
        </div>
        <div className='labeldiv'>
         <label>No Data Found</label>
        </div>
 

    </>
  )
}
const Presentstaff = () => {
  return (
    <> 
     <div className='labeldiv'>
         <label>No Data Found</label>
        </div>
      
    </>
  )
}
const LeaveStaff = () => {
  return (
    <> 
     <div className='labeldiv'>
         <label>No Data Found</label>
        </div>
      
    </>
  )
}

const WeakoffStaff = () => {
  return (
    <> 
     <div className='labeldiv'>
         <label>No Data Found</label>
        </div>
      
    </>
  )
}

const AbsentStaff = () => {
  return (
    <> 
     <div className='labeldiv'>
         <label>No Data Found</label>
        </div>
      
    </>
  )
}

const TimeTable = () => {
  return (
    <> 
    <label style={{margin:"10px",fontSize:'13px'}}><span>Note : </span>The teaching staff who are on leave or absent for the day are listed with the allocated periods on their timetable. Click on the assign option against the period to get the list of staff who are free at the time and assign a subject to be handled by the teacher. An email is sent to the staff who has been substituted for that period.</label>
    <table style={{margin:'10px'}}>
      <tr>
        <th>SR No.</th>
        <th>Staff Name</th>
        <th>Staff Code</th>
        <th>Staff Department</th>
        <th>Class Name</th>
        <th>Section </th>
        <th>Subject</th>
        <th>Period</th>
        <th>Timing</th>
        <th>Available Staff For Period</th>
        <th>Assign Subject</th>
      </tr>
      <tr>
        <td colSpan={11} style={{color:'red'}}>No Data Found!!!!.....</td>
      </tr>
    </table>
     
      
    </>
  )
}

  return (
    <>
     <div className="SDheading"><span>HR </span><label> / Staff Attendance / Daily Attendance Report </label> </div>
     <div  className="SDashboard">
     <div className='daTop'>
      <div className='dailyButton'>
        <button className={active === "a" ? "active" : "inactive"} id={"a"} onClick={(e) => {handleClick(e);handleOnClick('a');setAttdash(true);}}>Dashboard</button>
       <button className={active === "b" ? "active" : "inactive"} id={"b"} onClick={(e) => {handleClick(e);handleOnClick('b');setAttdash(false);}}>Present</button>
       <button className={active === "c" ? "active" : "inactive"} id={"c"} onClick={(e) => {handleClick(e);handleOnClick('c');setAttdash(false);}}>Leave</button>
       <button className={active === "d" ? "active" : "inactive"} id={"d"} onClick={(e) => {handleClick(e);handleOnClick('d');setAttdash(false);}}>Weak Off</button>
       <button className={active === "e" ? "active" : "inactive"} id={"e"} onClick={(e) => {handleClick(e);handleOnClick('e');setAttdash(false);}}>Absent</button>
       <button className={active === "f" ? "active" : "inactive"} id={"f"} onClick={(e) => {handleClick(e);handleOnClick('f');setAttdash(false);}}>Time Table Substitution</button>
            
              <select style={{marginLeft:"400px",marginRight:"20px",backgroundColor:"#d9dbde"}}><option>Ethiken Educational Society</option></select>
              <input type='date'></input>
              
            </div>  
         </div>
         {attdash && <Attendancedash/>}  
         {attstaff === 'b' && <Presentstaff/>}
         {attstaff === 'c' && <LeaveStaff/>}
         {attstaff === 'd' && <WeakoffStaff/>}
         {attstaff === 'e' && <AbsentStaff/>}
         {attstaff === 'f' && <TimeTable/>}
      
         
        

        </div>

    </>
  )
}

export default DailyAttendanceReport;