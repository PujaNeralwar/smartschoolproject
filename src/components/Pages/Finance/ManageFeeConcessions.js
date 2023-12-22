import React from 'react';
import "../Finance/FinanceStyle.css";


const ManageFeeConcessions = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Fee Management / Manage Fee Concessions </label> </div>

<div className='ManageFeeConcessionsHeading'>
   <label>Manage Fee Concessions</label>
   <p>Only Regular Fee Types</p> 
</div>
  
  <div className='AssignFeeStudent'>
    <div className='AssignFee'>
          <div>
            <label> Academic Year </label>
              <select>
                <option>2023-2024</option>
                <option>2022-2023</option>
              </select>
          </div>

          <div>
            <label>Branch </label>
               <select>
                   <option>Ethiken Educational Society</option>
              </select>
          </div>

          
          <div>
            <label>Student Segments </label>
               <select>
               <option>All Segments</option>
                  <option>Competitive NEET</option>
                  <option>Competitive JEE-IIT</option>
                  <option>GENERAL MPC</option>
                  <option>GENERAL BIPC</option>
                  <option>General MEC</option>
                  <option>General CEC</option>
                  <option>LNO REPEATERS</option>
                  <option>CA - CPT</option>
              </select>
          </div>

          <div>
            <label> Class </label>
               <select>
               <option>-Select Class-</option>
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

          
      </div>

      <div className='AssignFee'>  

      <div>
            <label>Section </label>
               <select>
                   <option>No results found</option>
              </select>
          </div>  

          <div>
            <label>Regular Fee Type </label>
               <select>
                   <option>-Select Fee Type-</option>
              </select>
          </div>

          <div className='ManageFeeBtnGrp'>
            <button className='ManageFeeConcessionsbtn' >Get </button>
          </div>
      </div>    

       </div>
    </>
  )
}

export default ManageFeeConcessions;