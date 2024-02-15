import React from 'react';
import { useState } from 'react';

const StaffTrainingPD = () => {
   
  const [trainingA,setTrainingA]= useState(true);
  const [active, setActive] = useState("");
  const [stafft,setStafft] = useState("");
  const handleOnClick=(e) =>{
    setStafft(e);
  }
  const handleClick = (e) => {
    setActive(e.target.id);
    
    
  }

  const TrainingAttendend = () => {
    return(
      <>

<div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
        <table>
        <tr>
            <th>SR No</th>
            <th>Name of Teacher</th> 
            <th>Designation</th>
            <th>Department</th>
            <th>Subject Name</th>
            <th>Total</th>          
        </tr>
        <tr>
            <td colSpan={6}>No Data Found</td>
                 
        </tr>     
         </table>
      </>
    )
  }

  const ProfessionalD = () => {
    return(
      <>

<div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
        <table>
        <tr>
            <th>SR No</th>
            <th> Staff Name</th> 
            <th>Designation</th>
            <th>Professional Development</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Venue Details</th>      
            <th>Remark</th>  
        </tr>
        <tr>
            <td colSpan={8}>No Data Found</td>
                    
        </tr>     
         </table>
      </>
    )
  }

  const Achievement = () => {
    return(
      <>

<div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
        <table>
        <tr>
            <th>SR No</th>
            <th> Staff Name</th> 
            <th>Designation</th>
            <th>Achievement & Milestone</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Venue Details</th>      
            <th>Remark</th>  
        </tr>
        <tr>
            <td colSpan={8}>No Data Found</td>
                    
        </tr>     
         </table>
      </>
    )
  }

  const ResearchLog = () => {
    return(
      <>

<div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
        <table>
        <tr>
            <th>SR No</th>
            <th> Staff Name </th> 
            <th>Staff Code</th>
            <th>Type</th>
            <th>Date</th>
            <th>Entry Time</th>  
            <th>Exit Time</th>  
            <th>Duration</th>    
            <th>Remark</th>        
        </tr>
        <tr>
            <td colSpan={9} style={{color:'red'}}>No records to display!!!...</td>
                   
        </tr>     
         </table>
      </>
    )
  }
  

  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Details / Staff Training & PD </label> </div>
        
        <div  className="SDashboard">
         <div className='top2'>
            <label>Staff Training</label>
            <div className='staffbut'>
              <button>Add Entry</button>
              <select>
                <option>Ethiken Eduational Society</option>

              </select>
              
            </div>  
         </div>
         
          <div className='mainbuttons'>
            <button className={active === "a" ? "active" : "inactive"} id={"a"} onClick={(e) => {handleClick(e);handleOnClick('a');setTrainingA(true);}}>Training Attended</button>
              <button className={active === "b" ? "active" : "inactive"} id={"b"} onClick={(e) => {handleClick(e);handleOnClick('b');setTrainingA(false);}}>Professional Development</button>
              <button className={active === "c" ? "active" : "inactive"} id={"c"} onClick={(e) => {handleClick(e);handleOnClick('c');setTrainingA(false);}}>Achievement and Milestone</button>
              <button className={active === "d" ? "active" : "inactive"} id={"d"} onClick={(e) => {handleClick(e);handleOnClick('d');setTrainingA(false);}}>Reaserch Log</button>   
          </div>

        <div className='staffcontainer'>
         {trainingA && <TrainingAttendend/>}
         {stafft === 'b' && <ProfessionalD/>}
         {stafft === 'c' && <Achievement/>}
         {stafft === 'd' && <ResearchLog/>}

          </div>
        </div>
    </>
  )
}

export default StaffTrainingPD;