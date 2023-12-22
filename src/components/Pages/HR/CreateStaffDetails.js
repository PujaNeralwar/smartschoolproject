import React from 'react';
import "../HR/Hrstyle.css";
import { useState } from 'react';

const CreateStaffDetails = () => {

  const [selectedOption, setSelectedOption] = useState("Teaching")  

  const handleOptionChange =(event) => {
    setSelectedOption(event.target.value);
  }


  return (
    <> 
        <div className="SDheading"><span>HR </span><label> / Staff Details / Create Staff Details </label> </div>
        
        <div  className="SDashboard">
         <div className='top2'>
            <label>Staff List</label>
            <div className='staffbut'>
              <button>Staff Resumes</button>
              <button>Assign Staff to School Transport</button>
            </div>  
         </div>
         <div className='staffbut2'>
              <button>Add Staff</button>
              <button>Add Transport Staff</button>
              <button>Upload Satff</button>
              <button>Manage Department</button>
              <button>Manage Designation</button>
              <button>Manage Qualification</button>
          </div>

          <div className='mainbuttons'>
            <button>Active Staff</button>
              <button>InActive Staff</button>
              <button>Dashboard</button>
              <button>Train Staff</button>
              <button>Work Load</button>
              <button>Employement Status</button>
              <button>Staff Kids</button>
              <button>Staff Using Transport</button>
              <button>Log</button>
          </div>

        <div className='staffcontainer'>

          <div className='innerstcontainer'>

            <div className='stafftypediv'>
               <label>Staff type</label>
               <div className='radiocon'>
               <div className="radio">
               <label>
               <input type="radio" value="option1" 
                      checked={selectedOption === 'Teaching'} 
                      onChange={handleOptionChange} />
                       Teaching
               </label>
             </div>
             <div className="radio">
             <label>
             <input type="radio" value="option2" 
                      checked={selectedOption === 'Non Teaching'} 
                      onChange={handleOptionChange} />
                  Non Teaching
              </label>
              </div>
             <div className="radio">
              <label>
              <input type="radio" value="option3" 
                      checked={selectedOption === 'Transport'} 
                      onChange={handleOptionChange} />
                    Transport
              </label>
              </div>
              </div>
           
            </div>
            <div className='stdepartment'>
              <label>Staff Department</label>
              <select>
                <option>All Department</option>
                <option>Teaching</option>
                <option>Non Teaching</option>
                <option>Transport</option>
              </select>
            </div>  
           </div>    
        <div className='twodiv'> 
     <div className='leftdiv'> <i class="fa-solid fa-file-excel fa-xl" style={{color: "#35f3dd;"}}></i></div>
     <div className='rgtdiv'><input placeholder='Serach in Table'></input> </div>
    </div>
    
        <table>
        <tr>
            <th>SR No</th>
            <th>Staff Name</th>
            <th>Date of Joining</th>
            <th>DOB</th>
            <th>Staff Branch Code</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Access Level</th>
            <th>Edit Basic Details </th>
            <th>Edit Full Details</th>
            
            
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

export default CreateStaffDetails;