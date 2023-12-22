import React from 'react';
import "../HR/Hrstyle.css";

const AttendanceSummary = () => {
  return (
    <>
        <div className='atdiv'> 
        <select>
            <option>Select Option</option>
            <option>Last 7 days</option>
            <option>Last 15 days</option>
            <option>Last 30 days</option>    
        </select>

       <label> <i class="fa-solid fa-cloud-sun fa-beat-fade" style={{color: "#ffd22e",}}></i> Morning Session </label>
       <label> <i class="fa-solid fa-cloud-moon fa-beat-fade" style={{color:"#ffd22e",}}></i> Evening Session </label>
       </div>
       <div className='labeldiv'>
        <label>No Data Found</label>
       </div>
    </>
  )
}

export default AttendanceSummary;