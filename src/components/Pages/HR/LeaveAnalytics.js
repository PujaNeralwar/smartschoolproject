import React, { useState } from 'react'
import "../HR/Hrstyle.css";
const LeaveAnalytics = () => {
     const[mostleave,setMostleave]=useState(true);
     const[unplannedleave,setUnplannedleave]=useState(false);
     const[balanceleave,setBalaneleave]=useState(false);
     const [active2, setActive] = useState("");

    const handleClick = (e) => {
        setActive(e.target.id);
        
        
      }
      const Mostleave = () => {
        return (
        <>
            <div className='top1'>
                <label>Most Leave Taken By Department</label>
            </div>

            <div className='innerdash'>
        <div className='leftinnerdash'>
            <div className='fdiv' style={{backgroundColor:"#fff", color:"#000"}}>
            <i class="fa-solid fa-circle" style={{color:"#f236d0"}}></i> &nbsp; Non Teaching<br></br>
             <br></br>
             
             <div>
             &nbsp; &nbsp; &nbsp;<label className='btlabel'>Employee </label>&nbsp; &nbsp; &nbsp; 
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<label className='btlabel'>Total Days</label>
             <br></br>
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<label>0</label>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<label>0</label>
             </div>
            </div>
            <div className='sdiv'style={{backgroundColor:"#fff", color:"#000"}}>
            <i class="fa-solid fa-circle" style={{color:"#7c5dd0"}}></i> &nbsp; Teaching
             <br></br>
             <br></br>
             <div>
             &nbsp; &nbsp; &nbsp;<label className='btlabel'>Employee </label>&nbsp; &nbsp; &nbsp; 
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<label className='btlabel'>Total Days</label>
             <br></br>
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<label>0</label>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<label>0</label>
             </div>
            </div>
            <div className='tdiv'style={{backgroundColor:"#fff", color:"#000"}}>
             <i class="fa-solid fa-circle" style={{color:"#53c408"}}></i> &nbsp; Transport Staff
             <br></br>
             <br></br>
             <div>
             &nbsp; &nbsp; &nbsp;<label className='btlabel'>Employee </label>&nbsp; &nbsp; &nbsp; 
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<label className='btlabel'>Total Days</label>
             <br></br>
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<label>0</label>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<label>0</label>
             </div>
              
            </div>
        </div>
        <div className='rightinnerdash'>
         <div className='top'>
         <button><i class="fa-solid fa-users fa-fade" style={{color:"#6db305"}}></i>  Staff Wall</button>
         <button><i class="fa-solid fa-users fa-fade" style={{color:"#6db305"}}></i>  Class Wall</button>
         <button><i class="fa-solid fa-pen-to-square fa-fade" style={{color:"#9702c0"}}></i> Feedback & Praises</button>
         <button><i class="fa-solid fa-cake-candles fa-fade" style={{color: "#ff0088"}}></i> Birthdays</button>
         <button><i class="fa-solid fa-users-viewfinder fa-fade" style={{color: "#472598"}}></i> Staff Attendance</button>
         </div>
     
         &nbsp;&nbsp;&nbsp;Note : Latest staff Messages
        </div>

        </div>
        <div className='twodiv'> 
     {/* <button onClick={() => setcreateAdmin(true)}>Create Branch User</button> */}
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    {/* {createAdmin && <CreateBranchUser  closeAdmin={closeAdmin}/>} */}
        <table>
        <tr>
            <th>SR No</th>
            <th>Staff Name</th>
            <th>Staff Code</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Leave Instance</th>
            <th>Total Leaves Taken</th>
            
            
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
              
        </tr>
          
         </table>

        </>

        );

      }
      const Unplannedleave = () => {
        return (
        <>
            <div className='top1'>
                <label>Unplanned Leave Taken By Department</label>
            </div>

            <div className='innerdash'>
        <div className='leftinnerdash'>
            <div className='fdiv' style={{backgroundColor:"#fff", color:"#000"}}>
            <i class="fa-solid fa-circle" style={{color:"#f236d0"}}></i> &nbsp; Non Teaching<br></br>
             <br></br>
             
             <div>
             &nbsp; &nbsp; &nbsp;<label className='btlabel'>Employee </label>&nbsp; &nbsp; &nbsp; 
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<label className='btlabel'>Total Days</label>
             <br></br>
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<label>0</label>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<label>0</label>
             </div>
            </div>
            <div className='sdiv'style={{backgroundColor:"#fff", color:"#000"}}>
            <i class="fa-solid fa-circle" style={{color:"#7c5dd0"}}></i> &nbsp; Teaching
             <br></br>
             <br></br>
             <div>
             &nbsp; &nbsp; &nbsp;<label className='btlabel'>Employee </label>&nbsp; &nbsp; &nbsp; 
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<label className='btlabel'>Total Days</label>
             <br></br>
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<label>0</label>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<label>0</label>
             </div>
            </div>
            <div className='tdiv'style={{backgroundColor:"#fff", color:"#000"}}>
             <i class="fa-solid fa-circle" style={{color:"#53c408"}}></i> &nbsp; Transport Staff
             <br></br>
             <br></br>
             <div>
             &nbsp; &nbsp; &nbsp;<label className='btlabel'>Employee </label>&nbsp; &nbsp; &nbsp; 
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<label className='btlabel'>Total Days</label>
             <br></br>
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<label>0</label>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
             &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<label>0</label>
             </div>
              
            </div>
        </div>
        <div className='rightinnerdash'>
         <div className='top'>
         <button><i class="fa-solid fa-users fa-fade" style={{color:"#6db305"}}></i>  Staff Wall</button>
         <button><i class="fa-solid fa-users fa-fade" style={{color:"#6db305"}}></i>  Class Wall</button>
         <button><i class="fa-solid fa-pen-to-square fa-fade" style={{color:"#9702c0"}}></i> Feedback & Praises</button>
         <button><i class="fa-solid fa-cake-candles fa-fade" style={{color: "#ff0088"}}></i> Birthdays</button>
         <button><i class="fa-solid fa-users-viewfinder fa-fade" style={{color: "#472598"}}></i> Staff Attendance</button>
         </div>
     
         &nbsp;&nbsp;&nbsp;Note : Latest staff Messages
        </div>

        </div>
        <div className='twodiv'> 
     {/* <button onClick={() => setcreateAdmin(true)}>Create Branch User</button> */}
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    {/* {createAdmin && <CreateBranchUser  closeAdmin={closeAdmin}/>} */}
        <table>
        <tr>
            <th>SR No</th>
            <th>Staff Name</th>
            <th>Staff Code</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Leave Instance</th>
            <th>Total Leaves Taken</th>
            
            
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
              
        </tr>
          
         </table>

        </>

        );

      }
    

      const LeaveBalance = () => {
        return (
        <>
            <div className='top1'>
                <label>Total Balance Leave</label>
            </div>

            
        <div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    
        <table>
        <tr>
            <th>SR No</th>
            <th>Staff Name</th>
            <th>Staff Code</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Leave Instance</th>
            <th>Total Leaves Taken</th>
            
            
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
              
        </tr>
          
         </table>

        </>

        );

      }


  return (
    <>
         <div className='top1'>
         <button key={"1"} className={active2 === "1" ? "active" : "inactive"} id={"1"} 
         onClick={(e) => { handleClick(e);setMostleave(!mostleave);setUnplannedleave(false);setBalaneleave(false)}}> Most Leave Taken</button>

         <button key={"1"} className={active2 === "2" ? "active" : "inactive"} id={"2"} 
         onClick={(e) => { handleClick(e); setUnplannedleave(!unplannedleave);setMostleave(false); setBalaneleave(false)}}> Unplanned leave Taken</button>

         <button key={"1"} className={active2 === "3" ? "active" : "inactive"} id={"3"} 
         onClick={(e) => { handleClick(e);setBalaneleave(!balanceleave);setUnplannedleave(false);setMostleave(false);}}> Leave Balance available</button>
        
    
         </div>
         <div className='ladash'>
         <div className='selectdiv'>
            <select>
                <option>Last 7 Days</option>
                <option>Last 15 Days</option>
                <option>Last 30 Days</option>
                <option>Date Range</option>
            </select>
            <select>
                <option>-All Department-</option>
                <option>Teaching</option>
                <option>Non-Teaching</option>
                <option>Administration</option>
                <option>Academics</option>
                <option>Transport Staff</option>
            </select>
            <select>
                <option>Ethiken Educational Society</option>
            </select>
         </div> 
         <div className='leavedash'>
            {mostleave && <Mostleave/>}
            {unplannedleave && < Unplannedleave/>}
            {balanceleave && <LeaveBalance/>}
            
         </div>
         </div>

    </>
  )
}

export default LeaveAnalytics;