import React from 'react';
import "../Finance/FinanceStyle.css";


const FeePaymentChangeRequest = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Approvals / Fee Payment Change Requests </label> </div>

<div className='ManageFeeHeading'>
    <label> Fee Payment change requests status</label>
</div>

<div className='ManageFeeDrop'>
    <div>
      <label> Academic Year </label>
        <select>
          <option>2023-2024</option>
          <option>2022-2023</option>
        </select>
    </div>

    <div>
        <label>Location</label>
         <select>
          <option>Nizamabad</option>
          <option>Ethiken Educational Society</option>
        </select>
    </div>

    <div>
        <label>Type</label>
         <select>
          <option>All</option>
          <option>Amount Change</option>
          <option>Date Change</option>
          <option>Receipt Change</option>
          <option>Cancel Transaction</option>

        </select>
    </div>

    <div className='ManageFeeBtnGrp'>
      <button>Get</button>
    </div>

 </div>
    </>
  )
}

export default FeePaymentChangeRequest;