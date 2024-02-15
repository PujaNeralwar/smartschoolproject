
import React from 'react'
import { useState } from 'react';
const AssignWFHStaff = () => {

const [getWHFDetails,setGetWHF] = useState(false);

const WHFDtails = () => {
  return(
    <>
     <div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'> <input placeholder='Serach in Table'></input></div>
    </div>
    
    <div style={{alignItem:'center',margin:'20px',marginLeft:"36%"}}>
    <h3 >Ethiken Educational Society</h3>
    <h4 style={{color:'darkviolet'}}>SHAHEEN JUNIOR COLLEGE</h4>
    </div>
    <button style={{float:'right',marginRight:'50px',marginBottom:'10px',backgroundColor:'darkblue',color:'white'}}>Add</button>
    <table style={{margin:'10px'}}>
        <tr>
            <th>SR No</th>
            <th>Shift Name</th>
            <th>Staff Code</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Biometric Code</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Remark</th>
            
        </tr>
        <tr>
            <td  colSpan= {9} style={{color:"red"}}>No Work Hours Based Attendance Shifts in use found</td>       
        </tr>  
         </table>

    </>
  )
}


  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Attendance / Assign Work From Home To Staff </label> </div>

<div className='top3'>
<label>Assign Work From Home To Staff
</label>

</div>

<div  className="SDashboard">
         
        

          <div className='DailyAt'>
             <div>
             <label> Branch </label>
             <select><option>Ethiken Educational Society</option></select>
             </div>

             <div>
             <label> Date Type</label>
             <select style={{width:"250px"}}>
             <option>Todays</option>
             <option>Next 7 Days</option>
             <option>Next 14 Days</option>
             <option>Last 7 Days</option>
             <option>Last 14 Days</option>
             </select>
             </div>

             <div>
             <label> Staff Department </label>
             <select style={{width:"250px"}}><option>- All -</option>
             <option>Teaching</option>
             <option>Non-Teaching</option>
             <option>Transport</option>
             <option>Administration</option></select>
             </div>

            
                
             <button style={{backgroundColor:"blue",color:"#fff",marginTop:"40px",width:'100px'}} onClick ={ () => {setGetWHF(true);}}>Get</button>
             
          </div>

          {getWHFDetails && <WHFDtails/>}

        

        </div>
    </>
  )
}

export default AssignWFHStaff;