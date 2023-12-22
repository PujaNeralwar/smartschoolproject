import React from 'react';
import "../Finance/FinanceStyle.css";


const StudentDueDateChangeLog = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Log / Student Due Date Change Log </label> </div>

<div className='ManageFeeHeading'>
   <label>Student Due Date Change Log Report</label>
</div>
  
  <div className='ManageFeeDrop'>
          <div>
            <label> Academic Year </label>
              <select>
                <option selected='selected'>2023-2024</option>
                <option>2022-2023</option>
              </select>
          </div>

          <div>
            <label>Branch </label>
               <select>
                   <option selected='selected'>Ethiken Educational Society</option>
              </select>
          </div>

          <div>
            <label> Class </label>
               <select>
                  <option selected='selected'>All Classes</option>
                  <option>1 YEAR MPC-IIT</option>
                  <option>2 YEAR MPC-IIT</option>
                  <option>1 YEAR MPC-GENERAL</option>
                  <option>2 YEAR MPC-GENERAL</option>
                  <option>1 YEAR BPC-NEET</option>
                  <option>2 YEAR BPC-NEET</option>
                  <option>1 YEAR BPC-GENERAL</option>
                  <option>2 YEAR BPC-GENERAL</option>
                  <option>1 YEAR MEC</option>
                  <option>2 YEAR MEC</option>
                  <option>1 YEAR CEC</option>
                  <option>2 YEAR CEC</option>
                  <option>LNO (NEET)</option>
                  <option>LNO (IIT)</option>
              </select>
          </div>

          <div>
            <label>Section </label>
               <select>
                     <option selected='selected'>All Sections</option>
                     <option>No results found</option>
              </select>
          </div>

          <div className='ManageFeeBtnGrp'>
            <button>Show Report</button>
          </div>

       </div>
    </>
  )
}

export default StudentDueDateChangeLog;