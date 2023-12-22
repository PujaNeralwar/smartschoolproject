import React from 'react';
import "../Finance/FinanceStyle.css";


const BranchOtherFeeCollection = () => {
  return (
    <>
      <div className="ManageFeeHead"><span>Finance </span><label> / Collections / Branch Other fee collections </label> </div>

<div className='ManageFeeHeading'>
   <label>Branch Other fee collections</label>

  <div className='BranchOtherBtn'>
     <button>Add Receipt Entry</button>
     <button>Add Alumni Student Receipt Entry</button>
  </div>  
</div>
  
  <div className='ManageFeeDrop'>
          <div>
            <label>Feetype </label>
              <select>
                <option>All Feetypes</option>
               
              </select>
          </div>

          <div>
            <label>Date</label>
               <select>
                   <option>Today</option>
                   <option>Last 7 days</option>
                   <option>Last 30 days</option>
                  <option>Between dates</option>
              </select>
          </div>

         
          <div className='ManageFeeBtnGrp'>
            <button>Get</button>
          </div>

       </div>

    </>
  )
}

export default BranchOtherFeeCollection;