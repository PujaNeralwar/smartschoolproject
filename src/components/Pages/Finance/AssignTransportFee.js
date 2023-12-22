import React from 'react';
import "../Finance/FinanceStyle.css";


const AssignTransportFee = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Fee Management / Assign Transport Fee (Based on Previous Year) </label> </div>

<div className='ManageFeeHeading'>
   <label> Assign Transport Fee (Based on Previous Year Fee Plan)</label>
</div>
  
  <div className='AssignFeeStudent'>
    <div className='AssignFee'>

         <div>
             <label>Branch </label>
               <select>
                   <option selected='selected'>Ethiken Educational Society</option>
              </select>
          </div>

          <div>
            <label> Class </label>
               <select>
               <option selected='selected'>-All Classes-</option>
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
            <label>FeeType</label>
              <select>
                <option selected='selected'>-Select Feetype-</option>
                <option>Tuition fee</option>
                <option>Books Fee</option>
                <option>Lab Fee</option>
                <option>Hostel Fee</option>
                <option>Admission Fee</option>
                <option>Activity Fee</option>
                <option>Monthly Fee</option>
                <option>Kit Fee</option>

              </select>
          </div>

          <div>
            <label>Type </label>
               <select>
                   <option selected='selected'>Select Type</option>
                   <option>Not Assigned Students</option>
                   <option>Assigned Students</option>

              </select>
          </div>
      </div>

      <div className='AssignFee'>    

          <div>
            <label>Old FeePlan</label>
               <select>
                   <option selected='selected'>-Select Old FeePlan-</option>
              </select>
          </div>

          <div>
            <label> New Academic Year</label>
               <select>
               <option selected='selected'>-Select New Academic Year-</option>
              </select>
          </div>

          <div>
            <label>New FeePlan</label>
               <select>
                   <option>-Select New FeePlan-</option>
              </select>
          </div>
       
          <div className='ManageFeeBtnGrp'>
            <button className='AssignFeebtn' >Get Students</button>
          </div>
      </div>    

       </div>
    </>
  )
}

export default AssignTransportFee;