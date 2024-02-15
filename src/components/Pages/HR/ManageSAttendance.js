import React from 'react';
import { useState } from 'react';
import clock from "./clock.png";

const ManageSAttendance = () => {

  const [mngAttendance,setMgnAttendance]= useState(true);
  const [active, setActive] = useState("");
  const [mgnatt,setMgnAtt] = useState("");
  const handleOnClick=(e) =>{
    setMgnAtt(e);
  }
  const handleClick = (e) => {
    setActive(e.target.id);   
  }

  const MgnDash = () => {
    return(
      <>
      <div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    
        <table >
        <tr>
            <th>SR No</th>
            <th>Shift Name</th>
            <th>Teaching</th>
            <th>Non-Teaching</th>
            <th>Transport staff</th>
            
        </tr>
        <tr>
            <td style={{color:"red"}}>1</td>
            <td  style={{color:"red"}}>Not Assigned <i class="fa-solid fa-clock" style={{color: "#f8ad0d"}}></i> </td>
            <td style={{color:"red"}}>-</td>
            <td style={{color:"red"}}>16</td>
            <td style={{color:"red"}}>27</td>      
              
        </tr>
        <tr>
            <td>2</td>
            <td>Teaching Staff<i class="fa-solid fa-clock" style={{color: "#f8ad0d"}}></i> </td>
            <td>-</td>
            <td>-</td>
            <td>1</td>      
              
        </tr>
        <tr>
            <td colSpan={2}>Total</td>  
            <td>-</td>
            <td>16</td>
            <td>28</td>                 
        </tr>       
         </table>
      </>
    )
  }


  const WorkHoursBased = () => {
    return(
      <>
      <div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    
        <table >
        <tr>
            <th>SR No</th>
            <th>Shift Name</th>
            <th>No of work hours for full day attendance</th>
            <th>No of work hours for half day attendance</th>
            <th>Weekly Offs</th>
            <th>Action</th>
            
        </tr>
        <tr>
            <td  colSpan= {6} style={{color:"red"}}>No Work Hours Based Attendance Shifts in use found</td>       
        </tr>  
         </table>
      </>
    )
  }

  const WorkHoursBasedUn = () => {
    return(
      <>
      <div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    
        <table >
        <tr>
            <th>SR No</th>
            <th>Shift Name</th>
            <th>No of work hours for full day attendance</th>
            <th>No of work hours for half day attendance</th>
            <th>Weekly Offs</th>
            <th>Action</th>
            
        </tr>
        <tr>
            <td  colSpan= {6} style={{color:"red"}}>No Work Hours Based Attendance Shifts in use found</td>       
        </tr>  
         </table>
      </>
    )
  }

  const Staffshift = () => {
    return(
      <>
      
     <div className='rgtdiv'>
     <select>
     <option>February-2024</option>
      <option>January-2024</option>
      <option>December-2023</option>
     </select>
     <br></br>
      
    </div>
    
    
        <table >
        <tr>
            <th>SR No</th>
            <th>ERP Staff Code / Staff Branch Code</th>
            <th>Staff Name</th>
            <th>Staff Department</th>
            <th>Shif Name</th>
            
        </tr>
        <tr>
            <td  colSpan={5} style={{color:"red"}}>No record Found !!!.......</td>
               
              
        </tr>
        
         </table>
      </>
    )
  }

  const Timebasedshift = () => {
    return(
      <>
        <table >
        <tr>
            <th>Day</th>
            <th><i class="fa-solid fa-circle-question" style={{color:'blue'}}></i>&nbsp;Is First Session</th>
            <th> Session Name</th>
            <th><i class="fa-solid fa-clock" style={{color: "#f8ad0d"}}></i> &nbsp;Actual Sesssion Start Time</th>
            <th>Grace Period (min) <i class="fa-solid fa-circle-question" style={{color:'blue'}}></i></th>
            <th>Start Allowed Time Till <i class="fa-solid fa-circle-question" style={{color:'blue'}}></i> </th>
            <th><i class="fa-solid fa-clock" style={{color: "#f8ad0d"}}></i> &nbsp;Actual Session End Time</th>
            <th>Allowed Early Leaving Time (Min)<i class="fa-solid fa-circle-question" style={{color:'blue'}}></i></th>
            <th>End Allowed Time <i class="fa-solid fa-circle-question" style={{color:'blue'}}></i></th>
            <th>Expiry Date</th>
            <th>Action</th>
            
        </tr>
        <tr>
            <td colSpan={11}>
              <div style={{float:'left'}}>
                <label style={{fontSize:'20px',color:'green',fontWeight:'600'}}>Teaching Staff</label> <i class="fa-solid fa-pencil" style={{color:'green'}}></i>
                &nbsp; &nbsp;<span style={{fontSize:'13px',color:'#4e4f50'}}>Weekly Offs: All Sundays(Full Day Paid Weekly Off) </span>&nbsp;&nbsp;
                <label style={{fontSize:'15px',color:'blue'}} >Add Weekly Off</label> &nbsp; &nbsp;
                <label style={{fontSize:'15px',color:'blue'}}>Add Special Day</label>
              </div>
            </td>     
        </tr>
        <tr>
        <td>Normal Day</td>
        <td style={{color:'green'}}>First Session</td>
        <td>Morning</td>
        <td>07:50:00</td>
        <td>10</td>
        <td>08:00:00</td>
        <td>13:10:00</td>
        <td>10</td>
        <td>13:00:00</td>
        <td>31 Mar 2050</td>
        <td><i class="fa-solid fa-pencil" style={{color:'green'}}></i></td>
        </tr>
        
        <tr>
        <td>Normal Day</td>
        <td style={{color:'green'}}>---</td>
        <td>Afternoon</td>
        <td>14:00:00</td>
        <td>10</td>
        <td>14:00:00</td>
        <td>18:00:00</td>
        <td>5</td>
        <td>17:55:00</td>
        <td>31 Mar 2050</td>
        <td><i class="fa-solid fa-pencil" style={{color:'green'}}></i></td>
        </tr>
         </table>
      </>
    )
  }

  const TimebasedUnshift = () => {
    return(
      <>
        <table >
        <tr>
            <th>Day</th>
            <th><i class="fa-solid fa-circle-question" style={{color:'blue'}}></i>&nbsp;Is First Session</th>
            <th> Session Name</th>
            <th><i class="fa-solid fa-clock" style={{color: "#f8ad0d"}}></i> &nbsp;Actual Sesssion Start Time</th>
            <th>Grace Period (min) <i class="fa-solid fa-circle-question" style={{color:'blue'}}></i></th>
            <th>Start Allowed Time Till <i class="fa-solid fa-circle-question" style={{color:'blue'}}></i> </th>
            <th><i class="fa-solid fa-clock" style={{color: "#f8ad0d"}}></i> &nbsp;Actual Session End Time</th>
            <th>Allowed Early Leaving Time (Min)<i class="fa-solid fa-circle-question" style={{color:'blue'}}></i></th>
            <th>End Allowed Time <i class="fa-solid fa-circle-question" style={{color:'blue'}}></i></th>
            <th>Expiry Date</th>
            <th>Action</th>
            
        </tr>
        
        <tr>
            <td colSpan={11}>
              <div style={{float:'left'}}>
                <label style={{fontSize:'20px',color:'green',fontWeight:'600'}}>Non Teaching Staff-Morning and Afternoon </label> <i class="fa-solid fa-pencil" style={{color:'green'}}></i>
                &nbsp; &nbsp;<span style={{fontSize:'13px',color:'#4e4f50'}}>Weekly Offs: All Sundays(Full Day Paid Weekly Off) </span>&nbsp;&nbsp;
                <label style={{fontSize:'15px',color:'blue'}} >Add Weekly Off</label> &nbsp; &nbsp;
                <label style={{fontSize:'15px',color:'blue'}}>Add Special Day</label>
              </div>
            </td>     
        </tr>
        <tr>
        <td>Normal Day</td>
        <td style={{color:'green'}}>First Session</td>
        <td>Morning</td>
        <td>07:50:00</td>
        <td>10</td>
        <td>08:00:00</td>
        <td>13:10:00</td>
        <td>10</td>
        <td>13:00:00</td>
        <td>31 Mar 2050</td>
        <td><i class="fa-solid fa-pencil" style={{color:'green'}}></i></td>
        </tr>
        
        <tr>
        <td>Normal Day</td>
        <td style={{color:'green'}}>---</td>
        <td>Afternoon</td>
        <td>14:00:00</td>
        <td>10</td>
        <td>14:00:00</td>
        <td>18:00:00</td>
        <td>5</td>
        <td>17:55:00</td>
        <td>31 Mar 2050</td>
        <td><i class="fa-solid fa-pencil" style={{color:'green'}}></i></td>
        </tr>

        <tr>
            <td colSpan={11}>
              <div style={{float:'left'}}>
                <label style={{fontSize:'20px',color:'green',fontWeight:'600'}}>Non Teaching Staff-Morning and Afternoon 8AM TO 5pm </label> <i class="fa-solid fa-pencil" style={{color:'green'}}></i>
                &nbsp; &nbsp;<span style={{fontSize:'13px',color:'#4e4f50'}}>Weekly Offs: All Sundays(Full Day Paid Weekly Off) </span>&nbsp;&nbsp;
                <label style={{fontSize:'15px',color:'blue'}} >Add Weekly Off</label> &nbsp; &nbsp;
                <label style={{fontSize:'15px',color:'blue'}}>Add Special Day</label>
              </div>
            </td>     
        </tr>
        <tr>
        <td>Normal Day</td>
        <td style={{color:'green'}}>First Session</td>
        <td>Morning</td>
        <td>07:50:00</td>
        <td>10</td>
        <td>08:00:00</td>
        <td>13:10:00</td>
        <td>10</td>
        <td>13:00:00</td>
        <td>31 Mar 2050</td>
        <td><i class="fa-solid fa-pencil" style={{color:'green'}}></i></td>
        </tr>
        
        <tr>
        <td>Normal Day</td>
        <td style={{color:'green'}}>---</td>
        <td>Afternoon</td>
        <td>14:00:00</td>
        <td>10</td>
        <td>14:00:00</td>
        <td>18:00:00</td>
        <td>5</td>
        <td>17:55:00</td>
        <td>31 Mar 2050</td>
        <td><i class="fa-solid fa-pencil" style={{color:'green'}}></i></td>
        </tr>


        <tr>
            <td colSpan={11}>
              <div style={{float:'left'}}>
                <label style={{fontSize:'20px',color:'green',fontWeight:'600'}}>Teaching Staff-Moring and Afternoon  </label> <i class="fa-solid fa-pencil" style={{color:'green'}}></i>
                &nbsp; &nbsp;<span style={{fontSize:'13px',color:'#4e4f50'}}>Weekly Offs: All Sundays(Full Day Paid Weekly Off) </span>&nbsp;&nbsp;
                <label style={{fontSize:'15px',color:'blue'}} >Add Weekly Off</label> &nbsp; &nbsp;
                <label style={{fontSize:'15px',color:'blue'}}>Add Special Day</label>
              </div>
            </td>     
        </tr>
        <tr>
        <td>Normal Day</td>
        <td style={{color:'green'}}>First Session</td>
        <td>Morning</td>
        <td>07:50:00</td>
        <td>10</td>
        <td>08:00:00</td>
        <td>13:10:00</td>
        <td>10</td>
        <td>13:00:00</td>
        <td>31 Mar 2050</td>
        <td><i class="fa-solid fa-pencil" style={{color:'green'}}></i></td>
        </tr>
        
        <tr>
        <td>Normal Day</td>
        <td style={{color:'green'}}>---</td>
        <td>Afternoon</td>
        <td>14:00:00</td>
        <td>10</td>
        <td>14:00:00</td>
        <td>18:00:00</td>
        <td>5</td>
        <td>17:55:00</td>
        <td>31 Mar 2050</td>
        <td><i class="fa-solid fa-pencil" style={{color:'green'}}></i></td>
        </tr>

         </table>
      </>
    )
  }

  const Weeklyoffs =() => {
    return(
      <>
      <div className='updatestaffcontainer' style={{border:"none"}}>
        <div className='leftside'>
           <ul>
            <li>Teaching Staff <img src={clock} alt="cl"  style={{width:'25px'}}/></li>
            <li>Non Teaching Staff Morning & Afternoon</li>
            <li>Non Teaching Staff Morning & Afternoon 8AM TO 5PM</li>
            <li>Teaching Staff Morning & Afternoon</li>
            
           </ul>
         </div>
         <div className='rightside'>
          
         <div className='twodivstaff'> 
          <button>Download Staff Personal Details</button>
          <button style={{backgroundColor:'white', color:"black" , border:"1px solid blue"}}><i class="fa-solid fa-folder-open" style={{color: "#3f7fee"}}></i> Browse (.csv only)</button>
         
        </div>

         <div className='twodivstaff'> 
         <div className='ltdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
         <div className='rtdiv'><input placeholder='Serach in Table'></input> </div>
        </div>
    
        <table>
        <tr>
            <th>Sr No.</th>
            <th>Branch Code</th>
            <th>Reference Code</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Marital Status</th>
            <th>Divorced</th>
            <th>Aniversary Date</th>
            <th>Action</th>
            
        </tr>
        <tr>
            <td colSpan={11} style={{color:'red'}}>No record Found!!!....</td>
           
        </tr>
          
         </table>
         </div>

         </div>
      </>
    )
  }



  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Attendance / Manage Staff Attendance Shift & Sssions </label> </div>

        <div className='manageStaff1'>

        <div className='manageStaff'>
        <label>Staff Attendance Late / Early Modifications
        <button>How it Work ?</button>
        </label>
        <div>
          <select><option>Ethiken Educational Society</option></select>
          <select style={{marginLeft:"20px", width:"150px"}}>
          <option>- All -</option>
          <option>Teaching</option>
          <option>Non - Teaching</option>
          <option>Administration</option>
          <option>Transport</option>
          </select>
        </div>
        </div>
        <div className='stnote'>
          <label><span>Note :</span>For Work Hours Based Shift,Employee do not have specific work timing and can come anytime of a day ona need basis</label>
          <label><i class="fa-solid fa-clock" style={{color: "#f8ad0d"}}></i> Indicates time based shift &nbsp;&nbsp;<i class="fa-solid fa-hourglass-start" style={{color: "#125e29"}}></i> Indicates work hours based shift </label>
        </div>

        </div>

        <div  className="SDashboard">
          <div className='mainbuttons'>
          <button className={active === "a" ? "active" : "inactive"} id={"a"} onClick={(e) => {handleClick(e);handleOnClick('a');setMgnAttendance(true);}}>Dashboard</button>
          <button className={active === "b" ? "active" : "inactive"} id={"b"} onClick={(e) => {handleClick(e);handleOnClick('b');setMgnAttendance(false);}}>Staff Shift Details</button>
          <button className={active === "c" ? "active" : "inactive"} id={"c"} onClick={(e) => {handleClick(e);handleOnClick('c');setMgnAttendance(false);}}>Time Based Shift In Use</button>
          <button className={active === "d" ? "active" : "inactive"} id={"d"} onClick={(e) => {handleClick(e);handleOnClick('d');setMgnAttendance(false);}}>Time based Unused Shift</button>
          <button className={active === "e" ? "active" : "inactive"} id={"e"} onClick={(e) => {handleClick(e);handleOnClick('e');setMgnAttendance(false);}}>Work Hours Based Shift In Use</button>
          <button className={active === "f" ? "active" : "inactive"} id={"f"} onClick={(e) => {handleClick(e);handleOnClick('f');setMgnAttendance(false);}}>Work Hours Based Unused Shift</button>
          <button className={active === "g" ? "active" : "inactive"} id={"g"} onClick={(e) => {handleClick(e);handleOnClick('g');setMgnAttendance(false);}}>Weakly Offs</button>
          </div>

        <div className='staffcontainer'>
        {mngAttendance && <MgnDash />}
        {mgnatt === 'b' && <Staffshift/>}
        {mgnatt === 'c' && <Timebasedshift/>}
        {mgnatt === 'd' && <TimebasedUnshift/>}
        {mgnatt === 'e' && <WorkHoursBased/>}
        {mgnatt === 'f' && <WorkHoursBasedUn/>}
        {mgnatt === 'g' && <Weeklyoffs/>}

             
        


          </div>


        </div>




    </>
  )
}

export default ManageSAttendance;
