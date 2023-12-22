import React from 'react'
import "../HR/Hrstyle.css"
const StaffGroups = () => {
  return (
    <>
        <div className="SDheading"><span>HR </span><label> / Staff Details / Staff Groups </label> </div>

      <div className='top3'>
     <label>Staff Groups
      <button>Manage Staff Group</button>
      <button>View Staff Wall</button>
      <button>Staff Role</button>
      </label>
     <div className='staffbut'>
       <button>Staff Work Load</button>
       <button>Staff Work Allocation</button>
     </div>  
     </div>

     <div  className="SDashboard">
         
         

          <div className='mainbuttons'>
            <button>General<i class="fa-solid fa-circle-question"></i></button>
              <button>Reporting and Assignment<i class="fa-solid fa-circle-question"></i></button>
              <button>System Groups<i class="fa-solid fa-circle-question"></i></button>
              
          </div>

        <div className='staffcontainer'>

           
        <div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    
        <table>
        <tr>
            <th>SR No</th>
            <th>Branch Name</th>
            <th>Group Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Access level</th>
            <th>Total Staff</th>
            <th>Teaching</th>
            <th>Non Teaching</th>
            <th>No. Of Topic</th>

            
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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

export default StaffGroups;