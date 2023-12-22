import React from 'react';
import "../Finance/FinanceStyle.css";


const ApproveOfflinePayments = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Approvals / Approve Offline Payments </label> </div>

<div className='ManageFeeHeading'>
    <label>Generate Receipt for Offline Payments</label>
</div>

<div className='ManageFeeDrop'>
    <div>
        <label>Branch</label>
         <select>
          <option>Ethiken Educational Society</option>
        </select>
    </div>

    <div>
      <label> Academic Year </label>
        <select>
          <option>2023-2024</option>
          <option>2022-2023</option>
        </select>
    </div>

    <div>
      <label> Reconciliation Type </label>
        <select>
          <option>Pending</option>
          <option>Approved</option>
        </select>
    </div>

    <div className='ManageFeeBtnGrp'>
      <button>Get</button>
    </div>

</div>

    </>
  )
}

export default ApproveOfflinePayments;