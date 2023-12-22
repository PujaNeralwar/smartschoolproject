import React from 'react'
import "../HR/Hrstyle.css"
const UpdateStaffDetails = () => {
  return (
    <>
      <div className="SDheading"><span>HR </span><label> / Staff Details / Update Staff Details </label> </div>

<div className='top4'>
<label>Update Staff Details

<select className="ethselect"><option>Ethiken Educational Society</option></select>
<select><option>Teaching</option>
<option>Non Teaching</option>
<option>Transport</option>
</select>
<select><option>Active</option><option>InActive</option></select>

<button>GET</button>

</label>
</div>

<div  className="SDashboard">
          <div className='mainbuttons'>
            <button>Staff Details</button>
              <button>Contact Details</button>
              <button>UAN / PF / ESI</button>
              <button>Adhar / PAN / Passport / GovernmentId</button>
              <button>Nationality / Religion</button>
              
          </div>

        <div className='updatestaffcontainer'>
         <div className='leftside'>
           <ul>
            <li>Personal Details</li>
            <li>Family Details</li>
            <li>Health Details</li>
            <li>Staff Designations</li>
            <li>CTET Qualified or Trained</li>
            <li>Staff Employement Status</li>
            <li>Staff Qualifications</li>
            <li>DOB / DOJ</li>
            <li>Staff Bank Account Details</li>
            <li>Manage OutSource Staff</li>
            <li>Address Details</li>
            <li>Reference Code</li>
            <li>BioMetric Code</li>
            <li>Blood Group</li>
            <li>Caste or Sub Caste</li>
            <li>Staff WhatsApp No Details</li>
            <li>Staff Joining Security Deposite</li>
            <li>Microsoft Team EmailIDs</li>
            <li>Google EmailIDs</li>


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
        
</div>

    </>
  )
}

export default UpdateStaffDetails;