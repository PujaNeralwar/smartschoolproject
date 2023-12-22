import React from 'react'

const ManageSAttendance = () => {
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
            <button>Dashboard</button>
              <button>Staff Shift Details</button>
              <button>Time Based Shift In Use</button>
              <button>Time based Unused Shift</button>
              <button>Work Hours Based Shift In Use</button>
              <button>Work Hours Based Unused Shift</button>
              <button>Weakly Offs</button>
          </div>

        <div className='staffcontainer'>

           
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
            <td style={{color:"red"}}>16</td>
            <td style={{color:"red"}}>39</td>
            <td style={{color:"red"}}>1</td>
            
            
              
        </tr>
          
         </table>



          </div>


        </div>




    </>
  )
}

export default ManageSAttendance;
