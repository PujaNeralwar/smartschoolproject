import React from 'react'
import "../Finance/FinanceStyle.css";


const FeePlanDetailsReport = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Audit Reports / Fee Plan details report </label> </div>

<div className='ManageFeeHeading'>
   <label> Fee Plan Details</label>

  <div className='ManageFeeBut'>
     <button> Fee Plan Fee Type Details </button>
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
             <label> Academic Year </label>
              <select>
                <option  selected='selected'>2023-2024</option>
                <option>2022-2023</option>
              </select>
          </div>

          <div>
            <label> Segments </label>
               <select>
                 <option selected='selected'>All Segments</option>
                  <option>Competitive NEET</option>
                  <option>Competitive JEE-IIT</option>
                  <option>GENERAL MPC</option>
                  <option>GENERAL BIPC</option>
                  <option>General MEC</option>
                  <option>General CEC</option>
                  <option>LNO REPEATERS</option>
                  <option>CA - CPT</option>
              </select>
          </div>

          <div>
            <label> Fee Type </label>
               <select>
                   <option selected='selected'>Normal Fee</option>
                   <option>Transport Fee</option>
              </select>
          </div>

          <div>
            <label>Regular Type </label>
               <select>
                   <option selected='selected'>Feetype wise</option>
                   <option>Installment wise</option>
                   <option>Feeaccount wise</option>

              </select>
          </div>

      </div>

      <div className='AssignFee'>   

      <div>
            <label> Classes </label>
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

          <div className='ManageFeeBtnGrp'>
            <button className='AssignFeebtn' >Show Report</button>
          </div>
      </div>    

       </div>
    </>
  )
}

export default FeePlanDetailsReport;