import React from 'react';
import "../Finance/FinanceStyle.css";

const AssignFeeToStudents = () => {
  return (
    <>
<div className="ManageFeeHead"><span>Finance </span><label> / Fee Management / Assign Fee to Students </label> </div>

<div className='ManageFeeHeading'>
   <label> Assign Fee to Students</label>

  <div className='ManageFeeBut'>
     <button> Assign Transport Fee </button>
  </div>  
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

          <div>
            <label>Section </label>
               <select>
                   <option>-Select Section-</option>
              </select>
          </div>
      </div>

      <div className='AssignFee'>    

          <div>
            <label>Regular Fee Type </label>
               <select>
                   <option>-Select Fee Type-</option>
              </select>
          </div>

          <div>
            <label> Segments </label>
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
            <label>Category </label>
               <select>
                   <option>All Category</option>
                   <option>Day Scholar</option>
                   <option>Residential/ Hostel</option>
                   <option>Semi Residential</option>
              </select>
          </div>

          <div>
            <label>Type of Student </label>
               <select>
                   <option>Both</option>
                   <option>New Students</option>
                   <option>Existing Students</option>
              </select>
          </div>



          <div className='ManageFeeBtnGrp'>
            <button className='AssignFeebtn' style={{width:"150px"}}>Get Students</button>
          </div>
      </div>    

       </div>
    </>
  )
}

export default AssignFeeToStudents;