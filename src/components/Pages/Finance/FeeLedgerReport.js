import React from 'react';
import "../Finance/FinanceStyle.css";


const FeeLedgerReport = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Collection Reports / Fee Ledger Report</label> </div>

    <div className='ManageFeeHeading'>
        <label> Fee Receipt Ledger Report</label>
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
                  <option  selected='selected'>All Classes</option>
                  <option><b>Higher-Secondary</b></option>
                  <option>Higher-Secondary-1 YEAR MPC-IIT</option>
                  <option>Higher-Secondary-2 YEAR MPC-IIT</option>
                  <option>Higher-Secondary-1 YEAR MPC-GENERAL</option>
                  <option>Higher-Secondary-2 YEAR MPC-GENERAL</option>
                  <option>Higher-Secondary-1 YEAR BPC-NEET</option>
                  <option>Higher-Secondary-2 YEAR BPC-NEET</option>
                  <option>Higher-Secondary-1 YEAR BPC-GENERAL</option>
                  <option>Higher-Secondary-2 YEAR BPC-GENERAL</option>
                  <option>Higher-Secondary-1 YEAR MEC</option>
                  <option>Higher-Secondary-2 YEAR MEC</option>
                  <option>Higher-Secondary-1 YEAR CEC</option>
                  <option>Higher-Secondary-LNO REPEATERS</option>
                  <option>Higher-Secondary-2 YEAR CEC</option>
                  <option>Higher-Secondary-LNO (NEET)</option>
                  <option>Higher-Secondary-LNO (IIT)</option>
              </select>
          </div>

          <div>
            <label> Academic Year </label>
              <select >
                <option selected='selected'>2023-24</option>
                <option> 2022-23</option>
              </select>
          </div>

          <div >
            <label>Payment Modes </label>
               <select>
               <option selected='selected'>All Paymentmodes</option>
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
            <label>Date Ranges </label>
            <div className='FeeDayDate'>
               <input type='date' value="2023-12-08" />
               <span>to</span> 
               <input type='date' value="2023-12-08"/>
            </div>
          </div>

         <div >
            <label>Student Status </label>
               <select>
                   <option>Active</option>
                  <option>Inactive </option>
                  <option selected='selected'>All </option>  
              </select>
          </div>

          <div>
            <label>Report Type </label>
               <select>
                   <option selected='selected'>Fee Period Wise</option>
                   <option>Receipt Wise </option>
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

export default FeeLedgerReport;