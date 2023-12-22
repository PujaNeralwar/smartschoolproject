import React from 'react';
import "../Finance/FinanceStyle.css";


const FeeDaySheet = () => {
  return (
    <>
     <div className="ManageFeeHead"><span>Finance </span><label> / Collection Reports / Fee Day Sheet</label> </div>

<div className='ManageFeeHeading'>
   <label> Fee Day Sheet</label>

  <div className='ManageFeeBut'>
         <select className='ManageFeeSelect'>
           <option>FeeDay Sheet</option>
         </select>
  </div>  
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
            <label> Fee Accounts </label>
              <select >
                <option selected='selected'>All Fee Accoounts</option>
                <option >Ethiken Educational Society</option>
              </select>
          </div>

          <div >
            <label>Date Ranges </label>
            <div className='FeeDayDate'>
               <input type='date' value="2023-12-08" />
               <span>to</span> 
               <input type='date' value="2023-12-08"/>
            </div>
          </div>

          <div >
            <label>Payment Modes </label>
               <select>
               <option selected='selected'>All Paymentmodes...</option>
                  <option>Online Payment</option>
                  <option>Cash</option>
                  <option>Cheque</option>
                  <option>Internet Payment</option>
                  <option>Credit / debit card swipe</option>
              </select>
          </div>

      </div>

      <div className='AssignFee'>    

      <div >
            <label>Type </label>
               <select className='MakePaymentSelect'>
                   <option selected='selected'>All Active Transactions (Include Cheque bounce)</option>
                   <option>All Active Transactions (Include Cheque bounces && Cancell Payments)</option>
                  <option>All Active Transactions </option>
                  <option>Cheque bounce Transactions</option>
                  <option>Cancelled Transaction</option>
                  <option>Advance Payment Transactions</option>
              </select>
          </div>

          <div>
            <label>Date Type </label>
               <select>
                   <option selected='selected'>Effective Date (Receipt Date)</option>
                   <option>Issued Date (System Entry Date)</option>
              </select>
          </div>

          <div >
            <label> Report Type </label>
               <select>
                  <option  selected='selected'>Individual Fee type Wise</option>
                  <option>consolidate</option>
              </select>
          </div>

          <div >
            <div className='FeeDayDate'>
            <input className='PdcIn' type='checkbox' />
            <span className='PdcIn'>Show PDC Payments</span>
            </div>
          </div>

          <div className='ManageFeeBtnGrp'>
            <button className='AssignFeebtn' >Show Report</button>
          </div>
      </div>    

       </div>

    </>
  )
}

export default FeeDaySheet;