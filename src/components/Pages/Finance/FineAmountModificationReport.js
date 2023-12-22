import React from 'react';
import "../Finance/FinanceStyle.css";


const FineAmountModificationReport = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Log / Fine Amount Modification Report </label> </div>

<div className='ManageFeeHeading'>
   <label>Fine Amount Modification Report</label>
</div>
  
  <div className='ManageFeeDrop'>
        
          <div>
            <label>Branch </label>
               <select>
                 <option selected='selected'>-All Branches-</option>
                 <option>Ethiken Educational Society</option>
              </select>
          </div>

          <div>
            <label>Academic Year </label>
               <select>
                     <option selected='selected'>2023-2024</option>
                     <option>2022-2023</option>
              </select>
          </div>

          <div className='ManageFeeBtnGrp'>
            <button>Get</button>
          </div>

       </div>
    </>
  )
}

export default FineAmountModificationReport;