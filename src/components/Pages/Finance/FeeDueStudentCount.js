import React from 'react'

import "../Finance/FinanceStyle.css";


const FeeDueStudentCount = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Due Reports / Fee Due students Count </label> </div>

<div className='ManageFeeHeading'>
   <label>Fee Due Count</label> 
</div>
  
  <div className='AssignFeeStudent'>
    <div className='AssignFee'>
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
            <label>Installment </label>
             <select >
                <option selected='selected'>All Installments</option>
                <option >Installment 1</option>
                <option >Installment 2</option>
                <option >Installment 3</option>
                <option >One Time</option>
              </select>
          </div>

          <div>
            <label>Fee Types </label>
               <select>
                   <option selected='selected'>All Feetypes</option>
                   <option>Tution Fee</option>
                   <option>Books Fee</option>
                   <option>Lab Fee</option>
                   <option>Hostel Fee</option>
              </select>
          </div>
      </div>

      <div className='AssignFee'>    

          <div>
            <label>Report Type</label>
               <select>
                   <option selected='selected'>Consolidate</option>
                   <option selected='selected'>Class Wise</option>
              </select>
          </div>

          <div className='ManageFeeBtnGrp'>
            <button className='AssignFeebtn' >Show Report</button>
          </div>
      </div>    

       </div>
    </>
  )
}

export default FeeDueStudentCount;