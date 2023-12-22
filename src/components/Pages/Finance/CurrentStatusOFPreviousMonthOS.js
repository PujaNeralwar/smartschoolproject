import React from 'react';
import "../Finance/FinanceStyle.css";


const CurrentStatusOFPreviousMonthOS = () => {
  return (
    <>
    <div className="ManageFeeHead"><span>Finance </span><label> /Audit Reports / Current Status Of Previous month OS </label> </div>

    <div className='ManageFeeHeading'>
        <label>Current Status Of Previous month Outstanding</label>
    </div>
  
  <div className='AssignFeeStudent'>
    <div className='AssignFee CurrentStatus'>
          <div>
             <label>Branch </label>
               <select>
                   <option selected='selected'>Ethiken Educational Society</option>
              </select>
          </div>

          <div>
            <label> Class </label>
               <select>
               <option >-All Classes-</option>
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
                  <option selected='selected'>1 YEAR CEC</option>
                  <option>2 YEAR CEC</option>
                  <option>LNO (NEET)</option>
                  <option>LNO (IIT)</option>
              </select>
          </div>

          <div>
            <label> Fee Types </label>
               <select>
                   <option selected='selected'>-Select Fee Types-</option>
                   <option>Tution Fee</option>
                   <option>Books Fee</option>
                   <option>Lab Fee</option>
                   <option>Hostel Fee</option>

              </select>
          </div>

          <div>
            <label> Fee Accounts </label>
              <select>
                <option selected='selected'>All FeeAccounts</option>
                <option>Ethiken Educational Society</option>
              </select>
          </div>

      </div>

      <div className='AssignFee CurrentStatus'>    

          <div>
            <label> Academic Month </label>
               <select>
                  <option selected='selected'>June-2023</option>
                  <option>July-2023</option>
                  <option>August-2023</option>
                  <option>September-2023</option>
                  <option>October-20223</option>
                  <option>November-2023</option>
                  <option>December-2023</option>
                  <option>January-2024</option>
                  <option>February-2024</option>
                  <option>March-2024</option>
                  <option>April-2024</option>
                  <option>May-2024</option>
              </select>
          </div>

          <div>
            <label>Month Wise </label>
               <select>
                   <option selected='selected'>Till this month</option>
                   <option>On this month</option>
              </select>
          </div>

          <div>
            <label>Status </label>
               <select>
                   <option selected='selected'>Both</option>
                   <option>Active Students</option>
                   <option>Inactive Students</option>
              </select>
          </div>

          <div>
            <label>Late Fees</label>
               <select>
                   <option selected='selected'>Without Late fee</option>
                   <option>With Late fee</option>
              </select>
          </div>

       </div>   

          <div className='AssignFee CurrentStatus'>  

          <div>
            <label>Report Type</label>
               <select>
                   <option selected='selected'>Consolidated</option>
              </select>
          </div>

          <div>
            <label> Type</label>
               <select>
                   <option selected='selected'>All Students</option>
              </select>
          </div>


            <div className='ManageFeeBtnGrp'>
                <button className='AssignFeebtn' >Get Report</button>
            </div>

          </div>

         </div>
      
    </>
  )
}

export default CurrentStatusOFPreviousMonthOS;