import React, { useState } from 'react';
import { useEffect } from 'react';



const GiveDailyAttendance = () => {
 
  const [getattendance,setGetAttendance] =useState (false);

  // const handleOnClick=(e) =>{
  //   setStaffU(e);
  // }

  const  Getattendance = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    
    return () => clearInterval(interval);
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

    return(
      <>
        <div className='getatt'>
          <div className='getleft'>
           <label style={{color:'red'}}>Morning : {formattedDate}</label>
           <p>Total :1</p>
           <p>Present : 0</p>
           <p>Absent : 0</p>
           <p>On Leave : 0</p>
           <p>Weekoff / NotGiven : 0</p>

          </div>
          <div className='getright'>
          <label style={{color:'red'}}>Morning : {formattedDate}</label>
          <p>Total :1</p>
           <p>Present : 0</p>
           <p>Absent : 0</p>
           <p>On Leave : 0</p>
           <p>Weekoff / NotGiven : 0</p>

          </div>
        </div>
        <button style={{backgroundColor:'blue',color:'white',margin:'10px',borderRadius:'5px'}}>Save Attendance</button>
      </>
    )
  }




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

          <button style={{backgroundColor:"blue",color:"#fff", margin:"30px"}} onClick={() => {setGetAttendance(true);}}>Get Staff</button>

          {getattendance && <Getattendance/>}

        </div>

    </>
  )
}

export default GiveDailyAttendance;