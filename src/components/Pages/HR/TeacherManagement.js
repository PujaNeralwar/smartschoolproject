import React from 'react'
import "../HR/Hrstyle.css";
const TeacherManagement = () => {
  return (
    
    <>
       <div className="SDheading"><span>HR </span><label> / Staff Details / Teacher Management </label> </div>

       <div className='top3'>
            <label>Assign Teachers / Subjects / Co-Ordinators</label>
            <div className='staffbut'>
              <button>Staff Work Load</button>
              <button>Staff Work Allocation</button>
            </div>  
       </div>

       <div className='maibuttons1'>
            <button>Class Teacher</button>
              <button> Subject Teacher</button>
              <button>Co-Ordinators</button>
              <button>Class Categories Incharge</button>
              <button>HOD Department</button>
              <button>House Incharge</button>
              <button>Activity Skill Teacher /Activity Skill Incharge</button>
              <button>Staff Role</button>
              
        </div>

        <div className="SDashboard1">   
           <div className='leftsd'>
            State
           </div>
           <div className='rightsd'>
           
           <div className='tmdiv'>
            <select>
              <option>All Classes</option>
              <option> 1 Year MPC-IIT</option>
              <option> 2 Year MPC-IIT</option>
            </select>
            <select>
              <option>All Section</option>
            </select>
            <button>Assign Class Teacher</button>
           </div>

           <div className='twodiv'> 
         <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
         {/* <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div> */}
        </div>
    
        <table>
        <tr>
            <th>Grade</th>
            <th>Section</th>
            <th>Class Teacher Name</th>
            <th>CTET Qualified</th>
            <th>Training (TGT/PGT)</th>
            <th>Status</th>
            
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
            
              
        </tr>
          
         </table>
           </div>
        </div>
    </>

  )
}

export default TeacherManagement;