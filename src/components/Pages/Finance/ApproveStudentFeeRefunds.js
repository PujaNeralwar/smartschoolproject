import React from 'react';
import "../Finance/FinanceStyle.css";


const ApproveStudentFeeRefunds = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Approvals / Approve Student Fee Refunds </label> </div>

<div className='ManageFeeHeading'>
   <label> Student Fee Refunds</label>
</div>
  
  <div className='ManageFeeDrop'>

          <div>
            <label>Branch </label>
               <select>
                   <option selected='selected'>Ethiken Educational Society</option>
              </select>
          </div>

          <div className='ManageFeeBtnGrp'>
            <button>show</button>
          </div>

       </div>
    </>
  )
}

export default ApproveStudentFeeRefunds;