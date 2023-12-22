import React from 'react';
import "../Finance/FinanceStyle.css";


const FeeEditDetailsReport = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Log / Fee Edit Details Report </label> </div>

<div className='ManageFeeHeading'>
   <label>  Fee Edit Details Report</label>
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
            <label> Fee Type </label>
              <select>
                <option selected='selected'>All Fee Types</option>
                <option>Tution fee</option>
                <option>Lab Fee</option>
                <option>Hostel Fee</option>
                <option>Admission Fee</option>
                <option>Activity Fee</option>
                <option>Monthly Fee</option>
                <option>Kit Fee</option>
              </select>
          </div>

         

          <div>
            <label> Date</label>
               <select>
               <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Date Range</option>
              </select>
          </div>
      </div>

      <div className='AssignFee'>    

          <div className='ManageFeeBtnGrp'>
            <button className='AssignFeebtn FeeEditBtn' >Get</button>
          </div>

      </div>    

 </div>
    </>
  )
}

export default FeeEditDetailsReport;