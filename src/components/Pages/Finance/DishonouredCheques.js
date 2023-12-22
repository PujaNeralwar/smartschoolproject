import React from 'react';
import "../Finance/FinanceStyle.css";

const DishonouredCheques = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Collection Reports / Dishonoured Cheques</label> </div>

<div className='ManageFeeHeading'>
   <label> Dishonoured Cheques</label>

  <div className='ManageFeeBut'> 
        <button>BankSubmission Form</button>
        <button>Cheque Statement</button>      
  </div>  
</div>
  
  <div className='AssignFeeStudent'>

    <div className='AssignFee cheque'>
      
         <div>
            <label>Branch </label>
               <select>
                   <option selected='selected'>Ethiken Educational Society</option>
              </select>
          </div>

          <div>
            <label> Receiving Bank Accounts </label>
              <select >
                <option selected='selected'>Select Bank Accoounts</option>
                <option >Bank Accounts</option>
                <option >STATE BANK OF INDIA-(40996221382)</option>
              </select>
          </div>

          <div>
            <label>Type </label>
               <select>
                   <option selected='selected'>As per Transaction Date</option>
                   <option >As per Cheque Bounce Date</option>

              </select>
          </div>

          <div >
            <label>Date Range </label>
            <div className='FeeDayDate'>
               <input type='date' value="2023-12-08" />
               <span>to</span> 
               <input type='date' value="2023-12-08"/>
            </div>
          </div>

      </div>

      <div className='AssignFee'>    

          <div >
            <label> Cheque Status </label>
               <select>
                  <option  selected='selected'>Select Cheque Status</option>
                  <option>Repaid</option>
                  <option>Unpaid</option>
                  <option>Only Chequebounce</option>
              </select>
          </div>

          <div className='ManageFeeBtnGrp'>
            <button className='AssignFeebtn' >Get</button>
          </div>
      </div>    

       </div>
    </>
  )
}

export default DishonouredCheques;